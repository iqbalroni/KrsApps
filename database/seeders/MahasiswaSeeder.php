<?php

namespace Database\Seeders;

use App\Models\Mahasiswa;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MahasiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Mahasiswa::create([
            'nim'=>'213PAI213',
            'name'=>'Mochammad Iqbal Roni',
            'email'=>'mahasiswa@gmail.com',
            'jenis_kelamin'=>'L',
            'password'=>bcrypt('mahasiswa123'),
            'prodi_id'=>1,
            'alamat'=>'jalan s parman Gg.mayor badean',
            'tanggal_lahir'=> Carbon::create('2004', '01', '21'),
            'tanggal_daftar'=> Carbon::create('2024', '08', '15'),
        ]);
    }
}
