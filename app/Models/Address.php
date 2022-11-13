<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Rented_unit;

class Address extends Model
{
    use HasFactory;

    public function rented_units (){
        return $this->belongsToMany(Rented_unit::class);
    }
}
