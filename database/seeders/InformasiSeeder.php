<?php

namespace Database\Seeders;

use App\Models\Informasi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InformasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Informasi::create([
            'judul'=>'informasi tentang perkuliahan',
            'deskripsi'=>'informasi ini di tujukan untuk mahasiswa baru agar selalu berpakaian rapi ke universitas',
            'status'=>1
        ]);
    }
}
