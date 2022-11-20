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
        Schema::create('property_accesses', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string("invite_link")->unique();
            $table->unsignedBigInteger("rented_property_id");
            $table->unsignedBigInteger("property_user_role_id");
            $table->tinyInteger("active")->nullable();
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
        Schema::dropIfExists('property_accesses');
    }
};
