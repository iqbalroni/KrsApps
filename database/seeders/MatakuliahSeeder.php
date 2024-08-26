<?php

namespace Database\Seeders;

use App\Models\MataKuliah;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MatakuliahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MataKuliah::create([
            'kode_matkul'=>'IPA123',
            'nama_matkul'=>'Ilmu Pengetahuan Alam',
            'prodi_id'=>1
        ]);
    }
}
