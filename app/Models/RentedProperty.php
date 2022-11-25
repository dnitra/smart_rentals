<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Address;
use App\Models\PropertyDetail;
use App\Models\Report;
use App\Models\Image;
use App\Models\PropertyAccess;
use App\Models\PropertyApplicant;

class RentedProperty extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot('role_id');
    }

    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function propertyDetails()
    {
        return $this->belongsToMany(PropertyDetail::class);
    }
    public function images()
    {
        return $this->hasMany(Image::class);
    }
    public function propertyApplicants()
    {
        return $this->hasMany(PropertyApplicant::class);
    }

    public function reports()
    {
        return $this->hasMany(Report::class);
    }

    public function propertyAccesses()
    {
        return $this->hasMany(PropertyAccess::class);
    }
}
