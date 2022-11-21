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

        // return [
        //     'status' => 'success',
        //     'property' => $property,
        //     'address' => $address,

        // ];
    }

    public function updateStatus(Request $request)
        {
            //get the data from all methods
            $data = $request->all();
            // dd($data['status'][0]['id']);
            //get the current user id
            $userId = auth()->id();
            // dd($userId);
            //get the current user's data from the database as object instance

            $updateStatus = Report::where('user_id', $userId)->where('id', $data['status'][0]['id'])->first();
            $updateStatus->active = $data['status'][0]['active'];
            $updateStatus->save();
            // dd($updateStatus);
        }


    public function reportsFromUser(Request $request)
    {
        //get the data from all methods
        $userId = auth()->id();
        dd($userId);
        $data = $request->all();
        // dd($data);
            // dd($userId);
            //get the current user's data from the database as object instance
        $userReports = Report::where('user_id', $data['id'])->where('active', '1')->get();
        
        return $userReports; 
    }


    public function deleteReport(Request $request)
    {
        //get the data from all methods
        $data = $request->all();
        // dd($data['status'][0]['id']);
        //get the current user id
        $userId = auth()->id();
        // dd($userId);
        //get the current user's data from the database as object instance

        $updateStatus = Report::where('user_id', $userId)->where('id', $data['deleteCurrnetReport'][0]['id'])->first();
        $updateStatus->delete();
        // dd($updateStatus);
    }

}
