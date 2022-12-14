<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rented_unit>
 */
class RentedPropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        return [

            "name" => fake()->realText($maxNbChars = 20),
            "rented_property_type_id" => fake()->numberBetween($min = 1, $max = 4),
            "price" => fake()->numberBetween($min = 10000, $max = 50000),
            "address_id" => rand(1, 30),
            "published" => rand(1, 10) > 6 ? 1 : null,

        ];
    }
}
