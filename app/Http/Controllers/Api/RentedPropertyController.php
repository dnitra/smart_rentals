<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RentedProperty;
use App\Models\Address;
use App\Models\User;
use Facades\App\Services\ImageService;
use Facades\App\Http\Controllers\ImageController;
use Illuminate\Support\Facades\Auth;



class RentedPropertyController extends Controller
{






    public function store(Request $request)
    {
        $data = $request->all();

        //get the current user id
        $userId = auth()->id();

        //get the current user's data from the database as object instance
        $user = User::find($userId);

        // create new instances of  property and address
        $property = new RentedProperty;
        $address = new Address;

        // fill the object with data and save it to database
        $address->street_and_number = $data["address"];
        $address->city = $data["city"];
        $address->country_id = $data["country"];
        $address->save();

        // fill the object with data and save it to database
        $property->name = $data["name"];
        $property->rented_property_type_id = $data["type"];
        $property->address_id = $address->id;
        $property->save();


        // if there are any uploaded images, then loop through them and call storeImage for each of them
        if ($request->has('uploaded_images')) {

            foreach ($request->file('uploaded_images') as $uploaded_image) {

                ImageService::storeImage($uploaded_image, $property->id);
            }
        }

        //save the user_id and rented_property_id to intermediate table
        $user->rentedProperties()->attach($property, ["role_id" => 1]);

        return [
            'status' => 'success',
            'property' => $property,
            'address' => $address,

        ];
    }


    public function showProperty($id)
    {
        $property = RentedProperty::with("address")->find($id);
        // $property = RentedProperty::with("address")->where('id', $id)->first();

        return $property;
    }

    public function publish(Request $request)
    {
        $data = $request->all();;

        //get the current user id
        $userId = auth()->id();

        //get the current user's data from the database as object instance
        $user = User::find($userId);

        $property = RentedProperty::findorFail($data["id"]);

        $property->published = 1;
    }
}
