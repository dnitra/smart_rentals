<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Accessory;

class AccessoriesItem extends Model
{
    use HasFactory;

    public function accesories()
    {
        return $this->hasMany(Accessory::class);
    }
}
