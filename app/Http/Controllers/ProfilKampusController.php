<?php

namespace App\Http\Controllers;

use App\Models\ProfilKampus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilKampusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    private $data = [
        'baseUrl'=>'/profilKampus',
        'title'=>'Profil Kampus'
    ];

    public function index()
    {
        $this->data['data'] = ProfilKampus::first();
        return Inertia('ProfilKampus/Index',$this->data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama_kampus'=>'required',
            'singkatan'=>'required',
            'email'=>'email|required',
            'logo'=>'mimes:png',
            'alamat'=>'required'
        ]);

        ProfilKampus::where('id_kampus','1')->update($request->all());

        return redirect()->route('profilkampus')->with('success','berhasil memperbarui profil kampus');
    }

    /**
     * Display the specified resource.
     */
    public function show(ProfilKampus $profilKampus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProfilKampus $profilKampus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProfilKampus $profilKampus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProfilKampus $profilKampus)
    {
        //
    }
}
