<?php

namespace App\Http\Controllers;

use App\Models\MataKuliah;
use App\Models\Prodi;
use Illuminate\Http\Request;

class MataKuliahController extends Controller
{
    public function index()
    {
        $data = [
            'matkul'=>MataKuliah::join('prodis','mata_kuliahs.prodi_id','prodis.id_prodi')
            ->get()
        ];

        return inertia('Matkul/Index',$data);
    }

    public function create()
    {
        $data = [
            'prodi'=>Prodi::get(),
        ];
        return inertia('Matkul/Add',$data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'kode_matkul'=>'required',
            'nama_matkul'=>'required',
            'prodi_id'=>'required',
        ]);

        MataKuliah::insert($data);

        return redirect()->route('mataKuliah.index')->with('success','Matkul Berhasil di tambahkan');

    }

    /**
     * Display the specified resource.
     */
    public function show(MataKuliah $mataKuliah)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MataKuliah $mataKuliah)
    {
        return inertia('Matkul/Edit',[
            'matkul'=>$mataKuliah,
            'prodi'=>Prodi::get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MataKuliah $mataKuliah)
    {
        $data = $request->validate([
            'kode_matkul'=>'required',
            'nama_matkul'=>'required',
            'prodi_id'=>'required',
        ]);

        $mataKuliah->update($data);

        return redirect()->route('mataKuliah.index')->with('success','Matkul Berhasil di Edit');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MataKuliah $mataKuliah)
    {
        $mataKuliah->delete();
        return redirect()->route('mataKuliah.index')->with('success','Matkul Berhasil di Hapus');
    }
}
