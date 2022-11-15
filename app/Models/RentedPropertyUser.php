<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RentedPropertyUser extends Model
{
    use HasFactory;
    public function rentedPropertyUserRole()
    {
        $this->belongsTo(RentedPropertyUserRole::class);
    }
}
