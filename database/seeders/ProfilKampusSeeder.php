<?php

namespace Database\Seeders;

use App\Models\ProfilKampus as ModelsProfilKampus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProfilKampusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ModelsProfilKampus::create([
            'id_kampus'=>'1',
            'nama_kampus'=>'Universitas Golda Coffee',
            'singkatan'=>'Ungolfee',
            'email'=>'goldanyamandiperut@gmail.com',
            'alamat'=>'jalan coffe gang wingsfood rt/rw 3/22',
        ]);
    }
}
