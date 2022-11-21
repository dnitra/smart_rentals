<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\RentedProperty;
use App\Models\RentedPropertyUserRole;

class PropertyAccess extends Model
{
    use HasFactory;

    public function rentedProperty()
    {
        return $this->belongsTo(RentedProperty::class);
    }

    public function rentedPropertyUserRole()
    {
        return $this->belongsTo(RentedPropertyUserRole::class);
    }
}
