<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\RentedProperty;

class Image extends Model
{
    use HasFactory;

    public function RentedProperty()
    {
        return $this->belongsTo(RentedProperty::class);
    }
}
