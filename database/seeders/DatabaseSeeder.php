<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\CountriesSeeder;
use Database\Seeders\PropertyDetailsSeeder;
use Database\Seeders\RentedPropertyUserRoleSeeder;
use Database\Seeders\RentedUnitSeeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'email' => 'nitradavid@gmail.com',
        ]);
        \App\Models\User::factory()->create([
            'email' => 'jakub.rosol@email.cz',
        ]);

        $this->call([
            CountriesSeeder::class,
            PropertyDetailsSeeder::class,
            RentedPropertyUserRoleSeeder::class,
            RentedUnitSeeder::class
        ]);
    }
}
