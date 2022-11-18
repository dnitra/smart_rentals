<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\RentedProperty;
use App\Models\Accessory;

class Report extends Model
{
    use HasFactory;

    public function rentedProperty()
    {
        return $this->belongsTo(RentedProperty::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function accessory()
    {
        return $this->belongsTo(Accessory::class);
    }
    
}   
