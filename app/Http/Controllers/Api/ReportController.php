<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Report;
use App\Models\Accessory;
use App\Models\RentedProperty;
use App\Models\User;

class ReportController extends Controller
{
    public function store(Request $request)
    {

        //get the data from all methods
        $data = $request->all();
        // dd($data);
        //get the current user id
        $userId = auth()->id();

        //get the current user's data from the database as object instance
        $user = User::find($userId);

        // create new instances of  property and address
        $property = new RentedProperty;
        $report = new Report;
        $accessory = new Accessory;
        // dd($data["subject"]);

        $report->user_id = $userId;
        $report->active = $data["report"]["active"];
        $report->subject = $data["report"]["subject"];
        $report->details = $data["report"]["details"];
        $report->accessory_id = $data["report"]["accessory_id"];
        $report->rented_property_id = $data["report"]["rented_property_id"];
        $report->save();
        
        // fill the object with data and save it to database
                // $address->street_and_number = $data["address"];
                // $address->city = $data["city"];
                // $address->country_id = $data["country"];
                // $address->save();

        // fill the object with data and save it to database
        // $property->name = $data["name"];
        // $property->rented_property_type_id = $data["type"];
        // $property->address_id = $address->id;
        // $property->save();

        // //save the user_id and rented_property_id to intermediate table
        // $user->rentedProperties()->attach($property, ["role_id" => 1]);


        // return [
        //     'status' => 'success',
        //     'property' => $property,
        //     'address' => $address,

        // ];
    }

}
