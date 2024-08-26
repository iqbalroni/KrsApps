<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DosenController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\MataKuliahController;
use App\Http\Controllers\ProdiController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [AuthController::class,'login'])->name('login');
Route::get('/login', [AuthController::class,'login']);
Route::post('/login', [AuthController::class,'Auth']);


Route::middleware(['auth:web,dosen,mahasiswa'])->group(function(){
    Route::post('/logout',[AuthController::class,'logout'])->name('logout');

    Route::get('/listDosen',[DosenController::class,'index']);

    Route::middleware(['auth:web'])->group(function(){
        // prodi
        Route::resource('/prodi', ProdiController::class);

        // dosen
        Route::resource('/dosen',DosenController::class);

        // MataKuliah
        Route::resource('/mataKuliah',MataKuliahController::class);

        // mahasiswa
        Route::put('/mahasiswa/nilai/{id}',[MahasiswaController::class,'InputNilai']);
        Route::resource('/mahasiswa', MahasiswaController::class);

        Route::resource('/admin',UserController::class);
    });

    // dashboard
    Route::get('/dashboard',[HomeController::class,'index'])->name('dashboard');

});
