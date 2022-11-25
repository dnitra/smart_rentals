<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Mail\InvitationMail;
use Illuminate\Support\Facades\Mail;
use App\Models\PropertyAccess;
use App\Models\RentedProperty;
use App\Models\PropertyApplicant;
use App\Models\User;
use App\Mail\ApplicationMail;


class MailController extends Controller
{
    //

    public function sendInvitation($accessId)
    {
        $user = auth()->user();
        $userEmail = $user->email;


        $access = PropertyAccess::with("rentedProperty.address")
            ->findOrFail($accessId);

        $access->fromEmail = $userEmail;

        // dd($access);
        Mail::to($access->email)->send(new InvitationMail($access));


        return $access;
    }

    public function sendApplication(Request $request, $propertyId)
    {

        $data = $request->formData;




        $applicant = new PropertyApplicant();

        $applicant->email = $data["email"];
        $applicant->name = $data["name"];
        $applicant->phone = $data["phone"];
        $applicant->message = $data["message"];
        $applicant->rented_property_id = $propertyId;
        $applicant->save();


        $property = RentedProperty::find($propertyId);
        $owners = [];
        foreach ($property->users as $user) {
            if ($user->pivot->role_id == 1) {
                $owners[] = $user;
            }
        };

        foreach ($owners as $owner) {
            Mail::to($owner->email)->send(new ApplicationMail($applicant, $property));
        };


        return $applicant;
    }
}
