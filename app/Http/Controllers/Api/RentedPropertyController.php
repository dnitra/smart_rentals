<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RentedProperty;
use App\Models\Address;
use App\Models\User;
use Illuminate\Support\Facades\Auth;



class RentedPropertyController extends Controller
{




    public function store(Request $request)
    {

        //get the data from all methods
        $data = $request->all();

        // dd($data);
        // handling data upload
        // $image = $request->file();
        // dd($image);

        // storing images
        // $request->file('uploaded_file')->storeAs(
        //     'uploaded_files',
        //     $request->file('uploaded_file')->getClientOriginalName(),
        //     'uploads'
        // );

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
        $userId = auth()->id();
        
        $property = RentedProperty::with("address")->where("rented_property_user.user_id", $userId)->find($id);
        // $property = RentedProperty::with("address")->where('id', $id)->first();
        dd($property);
        return $property;
    }
}
