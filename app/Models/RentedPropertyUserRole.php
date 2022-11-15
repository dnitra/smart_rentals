<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\RentedPropertyUser;

class RentedPropertyUserRole extends Model
{
    use HasFactory;

    public function rentedPropertyUsers()
    {
        return $this->hasMany(RentedPropertyUser::class);
    }
}
