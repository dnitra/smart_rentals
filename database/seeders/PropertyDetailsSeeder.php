<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PropertyDetail;

class PropertyDetailsSeeder extends Seeder

{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $details_list =
            [
                "no unit" =>
                [
                    "nFloors",
                    "..."
                ],
                "m2" =>
                [
                    "floorArea",
                    "..."

                ]

            ];

        foreach ($details_list as $unit => $details) {

            foreach ($details as $detail_name) {
                $detail = new PropertyDetail();

                $detail->name = $detail_name;
                $detail->unit = $unit;
                $detail->save();
            }
        }
    }
}
