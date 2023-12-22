<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('channels', function (Blueprint $table) {
            $table->id();
            $table->string('teacher_name');
            $table->string('teacher_image');
            $table->string('channel_image');
            $table->string('about');
            // $table->integer('age');
            // $table->integer('phone');

            // $table->string('address');
            // $table->string('competence');
            // $table->string('gender');
            // $table->string('cv');
            // $table->date('perthday');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('channels');
    }
};
