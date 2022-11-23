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
                "no unit" => [
                    "building" => "Building:",
                    "state" => "State:",
                    "type" => "Type",
                    "surrounding" => "Surrounding development",
                    "location" => "Location",
                    "protection" => "Protection",
                    "floorLocation" => "Floor location",
                    "propDescription" => "Descibe your property"
                ],
                "count" => [
                    "numberOfUdgFloors" => "Number of underground floors",
                    "numberOfFloors" => "Number of floors",
                    "parking" => "Parking space (count):",
                    "garage" => "Garage (count):",
                ],
                "m2" =>
                [
                    "usable" => "Usable (in m²):",
                    "buildUp" => "Built-up area (in m²):",
                    "garden" => "Gardens (in m²):",
                    "floorArea" => "Floor area (in m²):",
                    "balcony" => "Balcony (in m²):",
                    "loggia" => "Loggia (in m²):",
                    "terrace" => "Terrace (in m²):",
                    "pool" => "Pool (in m²):",
                    "loggia" => "Loggia (in m²):",
                    "terrace" => "Terrace (in m²):",
                    "pool" => "Pool (in m²):",

                ],
                "date" =>
                [
                    "sale" => "Sale: ",
                    "movingIn" => "Moving in: ",
                    "commencement" => "Construction Commencement: ",
                    "endOfConstruction" => "EndOfConstruction: ",
                    "visitFrom" => "Visit from: ",
                    "visitTo" => "Visit to: ",
                    "constructYear" => "Year of construction: ",
                    "approvalYear" => "Year of approval: ",
                    "reconstructionYear" => "Year of reconstruction:",
                ],
                "boolean" =>
                [
                    "wheelchairAccess" => "Wheelchair access",
                    "elevator" => "elevator",
                ],
                "checkbox" =>
                [
                    "waterSource" => "Water source",
                    "heatingDistrib" => "Heating distribution",
                    "gassDistrib" => "Gass distribution",
                    "wasteType" => "Waste type",
                    "accessRoad" => "Access road",
                    "telecom" => "Telecommunication",
                    "electricity" => "Electricity",
                    "transport" => "Transport",
                    "localSource" => "Local source",
                    "well" => "Well",
                    "remoteWaterSupply" => "Remote water supply",
                    "localGas" => "Local gas",
                    "centralGas" => "Central gas",
                    "localElectric" => "Local electric",
                    "centralSolidFuels" => "Central solid fuels",
                    "localSolidFuels" => "Local solid fuels",
                    "centralRemote" => "Central remote",
                    "floor" => "Floor",
                    "other" => "Other",
                    "individual" => "Individual",
                    "pipeline" => "Pipeline",
                    "publicSewerage" => "Public sewerage",
                    "septic" => "Septic",
                    "sump" => "Sump",
                    "concrete" => "Concrete",
                    "paved" => "Paved",
                    "asphalt" => "Asphalt",
                    "reinforced" => "Reinforced",
                    "gravel" => "Gravel",
                    "telephone" => "Telephone",
                    "internet" => "Library",
                    "satellite" => "Satellite",
                    "cableTv" => " Cable TV",
                    "cableDistrib" => "Cable distribution",
                ]
            ];

        foreach ($details_list as $unit => $details) {

            foreach ($details as $detail_slug => $datail_name) {
                $detail = new PropertyDetail();
                $detail->name = $datail_name;
                $detail->name_in_form = $detail_slug;
                $detail->unit = $unit;
                $detail->save();
            }
        }
    }
}
