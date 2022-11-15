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
        dd($data);

        $property = new RentedProperty;
        $address = new Address;

        $property->name = $data["name"];
        $address->address = $data["street_and_number"];
        $property->type = $data["type"];

        $property->save();

        return [
            'status' => 'success',
            'property' => $property
        ];
    }
}
