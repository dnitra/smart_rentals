<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Report;
use App\Models\AccessoriesItem;

class Accessory extends Model
{
    use HasFactory;

    public function reports()
    {
        return $this->hasMany(Report::class);
    }

    public function accessoriesItem()
    {
        return $this->belongsTo(AccessoriesItem::class);
    }
    
}
