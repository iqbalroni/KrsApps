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
        Schema::create('profil_kampuses', function (Blueprint $table) {
            $table->id('id_kampus');
            $table->string('nama_kampus',100);
            $table->string('singkatan',50);
            $table->string('email',50);
            $table->string('logo',100)->default('logo-kampus.png');
            $table->text('alamat');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profil_kampuses');
    }
};
