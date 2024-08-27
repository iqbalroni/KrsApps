<?php

namespace Database\Seeders;

use App\Models\Semester;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SemesterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'kode_semester'=>'20221',
                'nama_semester'=>'2021/2022 Ganjil',
                'status_aktif'=>true,
            ],[
                'kode_semester'=>'20222',
                'nama_semester'=>'2021/2022 Genap',
                'status_aktif'=>false,
            ],[
                'kode_semester'=>'20223',
                'nama_semester'=>'2021/2022 Pendek',
                'status_aktif'=>false,
            ]
        ];
        Semester::insert($data);
    }
}
