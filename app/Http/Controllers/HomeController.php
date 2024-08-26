<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use App\Models\MataKuliah;
use App\Models\Prodi;
use App\Models\Dosen;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class HomeController extends Controller
{
    public function index(){

        $data =[
            'prodi'=>Prodi::count(),
            'dosen'=>Dosen::count(),
            'matkul'=>MataKuliah::count(),
            'mahasiswa'=>Mahasiswa::count(),
            'admin'=>User::count(),
        ];

        return inertia('Dashboard/Index',['data'=>$data]);
    }
}
