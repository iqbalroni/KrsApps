<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DosenController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InformasiController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\MataKuliahController;
use App\Http\Controllers\ProdiController;
use App\Http\Controllers\ProfilKampusController;
use App\Http\Controllers\SemesterController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::get('/', [AuthController::class,'login'])->name('login');
Route::get('/login', [AuthController::class,'login']);
Route::post('/login', [AuthController::class,'Auth']);


Route::middleware(['auth:web,dosen,mahasiswa'])->group(function(){
    Route::post('/logout',[AuthController::class,'logout'])->name('logout');

    Route::get('/listDosen',[DosenController::class,'index']);

    Route::middleware(['auth:web'])->group(function(){

        // profil kampus
        Route::get('/profilKampus',[ProfilKampusController::class,'index'])->name('profilkampus');
        Route::post('/profilKampus/create',[ProfilKampusController::class,'store']);

        // prodi
        Route::resource('/prodi', ProdiController::class);

        // Informasi
        Route::resource('/informasi',InformasiController::class);

        // dosen
        Route::resource('/dosen',DosenController::class);

        // MataKuliah
        Route::resource('/mataKuliah',MataKuliahController::class);

        // mahasiswa
        Route::put('/mahasiswa/nilai/{id}',[MahasiswaController::class,'InputNilai']);
        Route::resource('/mahasiswa', MahasiswaController::class);

        Route::resource('/admin',UserController::class);

        Route::post('/semester/{id}/aktif',[SemesterController::class,'aktif']);
        Route::resource('/semester',SemesterController::class);
    });

    // dashboard
    Route::get('/dashboard',[HomeController::class,'index'])->name('dashboard');

});
