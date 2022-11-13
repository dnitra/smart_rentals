<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Rented_unit;

class RentedUnitController extends Controller
{
    //
    public function store(Request $request)
    {

        $data = $request->all();
        $unit = new Rented_unit;

        $unit->name = $data["name"];
        $unit->address_id = 1;
        $unit->rented_unit_type_id = 1;

        $unit->save();

        return [
            'status' => 'success',
            'unit' => $unit
        ];
    }
}
