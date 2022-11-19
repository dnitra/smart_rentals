<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserDataController extends Controller
{
    //
    public function showAllUserData()
    {
        //get the current user id
        $userId = auth()->id();

        //get the current user's data from the database as object instance
        $user = User::with('rentedProperties.address')
            ->with('rentedProperties.images')
            ->with("rentedProperties.reports")
            ->findOrFail($userId);

        return $user;
    }
}
