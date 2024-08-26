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
        Schema::create('mahasiswas',function (Blueprint $table) {
            $table->id('id_mahasiswa');
            $table->string('nim')->unique();
            $table->string('name');
            $table->string('email')->unique();
            $table->enum('jenis_kelamin',['L','P']);
            $table->string('password');
            $table->unsignedBigInteger('prodi_id')->unsigned();
            $table->text('alamat');
            $table->date('tanggal_lahir');
            $table->date('tanggal_daftar');
            $table->timestamps();

            $table->foreign('prodi_id')->references('id_prodi')->on('prodis')->onDelete('cascade');
        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mahasiswas');
    }
};
