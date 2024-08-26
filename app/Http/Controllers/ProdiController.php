<?php

namespace App\Http\Controllers;

use App\Models\Prodi;
use Illuminate\Http\Request;

class ProdiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Prodi::get();
        return inertia('Prodi/Index',[
            'prodi'=>$data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Prodi/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'kode_prodi'=>'required',
            'nama_prodi'=>'required',
        ]);

        Prodi::insert($data);

        return redirect()->route('prodi.index')->with('success','Prodi Berhasil di tambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Prodi $prodi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Prodi $prodi)
    {
        return inertia('Prodi/Edit',[
            'prodi'=>$prodi
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Prodi $prodi)
    {
        $data = $request->validate([
            'kode_prodi'=>'required',
            'nama_prodi'=>'required',
        ]);
        $prodi->update($data);

        return redirect()->route('prodi.index')->with('success','Prodi Berhasil di Edit');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prodi $prodi)
    {
        $prodi->delete();
        return redirect()->route('prodi.index')->with('success','Prodi Berhasil di hapus');
    }
}
