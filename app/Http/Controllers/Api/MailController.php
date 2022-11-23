<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Mail\InvitationMail;
use Illuminate\Support\Facades\Mail;
use App\Models\PropertyAccess;
use App\Models\RentedProperty;


use Illuminate\Http\Request;

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
}
