<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\RentedPropertyUserRole;

class RentedPropertyUserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            "Manager", "Owner", "Tenant", "Landlord"
        ];
        foreach ($roles as $role_name) {
            $role = new RentedPropertyUserRole;
            $role->role = $role_name;
            $role->save();
        }
    }
}
