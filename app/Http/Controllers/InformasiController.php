<?php

namespace App\Http\Controllers;

use App\Models\Informasi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InformasiController extends Controller
{
    private $data = [
        'baseUrl'=>'/informasi',
        'title'=>'Informasi Akademik',
    ];

    public function index()
    {
        $this->data['data'] = Informasi::get();

        return Inertia('Informasi/Index',$this->data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('Informasi/Add',$this->data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'judul'=>'required',
            'status'=>'required',
            'deskripsi'=>'required|min:15'
        ]);

        Informasi::insert($request->all());

        return redirect()->route('informasi.index')->with('success','berhasil menambahkan informasi akademik');
    }

    /**
     * Display the specified resource.
     */
    public function show(Informasi $informasi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Informasi $informasi)
    {
        $this->data['data'] = $informasi;
        return Inertia('Informasi/Edit',$this->data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Informasi $informasi)
    {
        $request->validate([
            'judul'=>'required',
            'status'=>'required',
            'deskripsi'=>'required|min:15'
        ]);

        $informasi->update($request->all());

        return redirect()->route('informasi.index')->with('success','berhasil memperbarui data informasi');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Informasi $informasi)
    {
        $informasi->delete();
        return redirect()->route('informasi.index')->with('success','data informasi berhasil di hapus');
    }
}
