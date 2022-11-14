<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RentedProperty;

class RentedPropertyController extends Controller
{
    //
    public function store(Request $request)
    {

        $data = $request->all();
        // dd($data);
        $property = new RentedProperty;
        // $address = new RentedProperty;

        $property->name = $data["name"];
        // $address->address = $data["address"];
        $property->type = $data["type"];

        $property->save();

        return [
            'status' => 'success',
            'property' => $property
        ];
    }
}
