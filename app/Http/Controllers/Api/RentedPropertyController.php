<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RentedProperty;
use App\Models\Address;
use App\Models\PropertyAccess;
use App\Models\User;
use Facades\App\Services\ImageService;
use App\Models\PropertyDetail;
use Illuminate\Support\Facades\DB;

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
        // $property->area = $data["area"];
        $property->rented_property_type_id = $data["type"];
        $property->address_id = $address->id;
        $property->save();
        // dd($property);


        // if there are any uploaded images, then loop through them and call storeImage for each of them
        if ($request->has('uploaded_images')) {

            foreach ($request->file('uploaded_images') as $uploaded_image) {

                ImageService::storeImage($uploaded_image, $property->id);
            }
        }



        //save the user_id and rented_property_id to intermediate table
        $user->rentedProperties()->attach($property, ["role_id" => 1]);

        //if there is rented_property_id being send with data then create new rented_property_user instance and fill it with the user_id, rented_property_id and role_id


        return [
            'status' => 'success',
            'property' => $property,
            'address' => $address,

        ];
    }


    //stor details for the property listings
    public function storeListingsDetails(Request $request, $propertyId)
    {

        $inputs = $request->all();

        foreach ($inputs as $inputName => $inputValue) {

            if ($inputValue) {
                $detailId = PropertyDetail::where("name_in_form", "=", $inputName)->first()->id;

                DB::table('property_detail_rented_property')->insert([
                    'property_detail_id' => $detailId,
                    'rented_property_id' => $propertyId,
                    'value' => $inputValue
                ]);
            }
        }
    }




    public function addAccess(Request $request, $propertyId)
    {

        $userId = auth()->user()->id;

        $data = $request->all();
        $access = new PropertyAccess();

        $access->first_name = $data["firstName"];
        $access->last_name = $data["lastName"];
        $access->email = $data["email"];
        $access->rented_property_user_role_id = $data["role"];
        $access->invite_link = fake()->bothify('?########?############???');
        $access->rented_property_id = $propertyId;

        try {
            $roleId = RentedProperty::findOrFail($propertyId)->users()->where("users.id", "LIKE", $userId)->first()->pivot->role_id;
            if ($roleId == 1 || $roleId == 2) {
                $access->save();
            }
        } catch (Exception $e) {
            echo 'Message: ' . $e->getMessage();
        }
    }

    public function removeAccess($propertyId, $accessId)
    {

        //get the current user id
        $user = auth()->user();

        PropertyAccess::destroy($accessId);
    }


    public function showProperty($id)
    {
        $userId = auth()->id();

        $property = RentedProperty::with("address")->where("rented_property_user.user_id", $userId)->find($id);
        // $property = RentedProperty::with("address")->where('id', $id)->first();
        dd($property);
        return $property;
    }

    public function handlePublishing(Request $request)
    {
        $data = $request->all();;

        $property = RentedProperty::findOrFail($data["propertyId"]);

        if ($property->published === null) {
            $property->published = 1;
        } else {
            $property->published = null;
        }

        $property->save();
    }

    public function showPublicListings()
    {
        $properties = RentedProperty::where("published", "like", 1)->with("address")->get();


        return $properties;
    }

    public function showInvitation($linkId)
    {

        $access = PropertyAccess::where("invite_link", "=", $linkId)->first();

        return $access;
    }
    public function update(Request $request, $propertyId)
    {
        $property = RentedProperty::find($propertyId);
        $data = $request->all();
        // dd($property->address);
        $address = $property->address;;
        // // fill the object with data and save it to database
        $address->street_and_number = $data["address"];
        $address->city = $data["city"];
        $address->country_id = $data["country"];
        $address->save();

        // if there are any uploaded images, then loop through them and call storeImage for each of them
        if ($request->has('uploaded_images')) {

            foreach ($request->file('uploaded_images') as $uploaded_image) {

                ImageService::storeImage($uploaded_image, $property->id);
            }
        }
        // dd($data["name"], $data["area"]);
        // // fill the object with data and save it to database
        // dd($data);
        $property->name = $data["name"];
        $property->area = $data["area"];
        $property->rented_property_type_id = $data["type"];
        $property->address_id = $address->id;
        $property->save();
    }
}
