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
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->string('subject');
            $table->string('details', 3000)->nullable();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('accessory_id')->nullable();
            $table->string('accessory_name');
            $table->unsignedBigInteger('rented_property_id');
            $table->tinyInteger("active");
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
        Schema::dropIfExists('reports');
    }
};
