<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\RentedProperty;

class PropertyAccess extends Model
{
    use HasFactory;

    public function rentedProperty()
    {
        return $this->belongsTo(RentedProperty::class);
    }
}
