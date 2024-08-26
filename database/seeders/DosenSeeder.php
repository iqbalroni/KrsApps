<?php

namespace Database\Seeders;

use App\Models\Dosen;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class DosenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Dosen::create([
            'nidn'=>123456,
            'email'=>'dosen@gmail.com',
            'password'=>bcrypt('dosen'),
            'nama_dosen'=>'Abdul Ramhad.ST',
            'jenis_kelamin'=>'L',
            'tanggal_lahir'=> Carbon::create('1989', '01', '21'),
        ]);
    }
}
