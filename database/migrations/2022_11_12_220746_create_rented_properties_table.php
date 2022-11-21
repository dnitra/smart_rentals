<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rented_properties', function (Blueprint $table) {
            $table->id();
            $table->string("name", 50)->nullable();
            $table->unsignedBigInteger("address_id");;
            $table->unsignedBigInteger("rented_property_type_id");;
            $table->unsignedBigInteger("parent_id")->nullable();
            $table->tinyInteger("published")->nullable();
            $table->tinyInteger("active")->nullable();
            $table->tinyInteger("rented_out")->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rented_properties');
    }
};
