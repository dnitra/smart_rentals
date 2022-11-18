<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\RentedProperty;
use Illuminate\Database\Seeder;
use Database\Seeders\CountriesSeeder;
use Database\Seeders\PropertyDetailsSeeder;
use Database\Seeders\RentedPropertyUserRoleSeeder;
use Database\Seeders\RentedPropertySeeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        // Populate users
        User::factory(10);


        User::factory()->create([
            'email' => 'jakub.rosol@email.cz',
        ]);
        User::factory()->create([
            'email' => 'nitradavid@gmail.com',
        ]);

        // Get all users and attach up to 10 properties to them

        $users = User::all();

        foreach ($users as $user) {

            for ($i = 0; $i < rand(1, 10); $i++) {
                $property = RentedProperty::create();

                DB::table('rented_property_user')->insert([
                    'user_id' => $user->id,
                    'rented_property_id' => $property->id,
                    'role_id' => 1

                ]);
            }


            $this->call([
                CountriesSeeder::class,
                PropertyDetailsSeeder::class,
                RentedPropertyUserRoleSeeder::class,
                AddressSeeder::class,
            ]);
        }
    }
}
