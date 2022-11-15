<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RentedProperty;
use App\Models\Address;

class RentedPropertyController extends Controller
{
    //
    public function store(Request $request)
    {

        $data = $request->all();
        // dd($data);

        // create new instance
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

        return [
            'status' => 'success',
            'property' => $property,
            'address' => $address,

        ];
    }
}
