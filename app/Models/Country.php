<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Address;

class Country extends Model
{
    use HasFactory;

    public function address()
    {

        $this->hasMany(Address::class);
    }
}
