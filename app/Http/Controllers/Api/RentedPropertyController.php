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




    public function storeProperty(Request $request)
    {

        //get the data from all methods
        $data = $request->all();

        //get the current user id
        $userId = auth()->id();

        //get the current user's data from the database as object instance
        $user = User::findOrFail($userId);

        // create new instances of  property and address
        $property = new RentedProperty;
        $address = new Address;

        // fill the object with data and save it to database
        $address->street_and_number = $data["address"];
        $address->city = $data["city"];
        $address->country = $data["country"];
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

    public function showAllProperties()
    {
        //get the current user id
        $user = auth()->user();

        //get the current user's data from the database as object instance

        $properties = $user->rentedProperties;
        // $address = $properties->addresses;

        
        return $properties;
    }

    public function showProperty($id)
    {
        $property = RentedProperty::with("address")->find($id);
        // $property = RentedProperty::with("address")->where('id', $id)->first();

        return $property;
    }
}
