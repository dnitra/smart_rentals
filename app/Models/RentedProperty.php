<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Address;
use App\Models\PropertyDetail;
use App\Models\Report;

class RentedProperty extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function propertyDetails()
    {
        $this->belongsToMany(PropertyDetail::class);
    }

    public function reports()
    {
        return $this ->hasMany(Report::class);
    }
    
}
