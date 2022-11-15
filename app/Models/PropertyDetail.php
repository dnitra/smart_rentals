<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\RentedProperty;

class PropertyDetail extends Model
{
    use HasFactory;

    public function rentedProperties()
    {
        $this->belongsToMany(RentedProperty::class);
    }
}
