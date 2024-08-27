<?php

namespace App\Http\Controllers;

use App\Models\Semester;
use Illuminate\Http\Request;

class SemesterController extends Controller
{
    public function index()
    {

        return inertia('Semester/Index',[
            'data' => Semester::get()
        ]);
    }

    public function aktif($id){
        Semester::where('status_aktif',1)->update([
            'status_aktif'=>false,
        ]);

        Semester::where('id_semester',$id)->update([
            'status_aktif'=>true,
        ]);

        return redirect()->route('semester.index')->with('success','Periode Berhasil diaktifkan');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Semester/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'tahun'=>'required',
            'periode'=>'required',
        ]);

        // create name
        if($request->periode == 1){
            $name = 'Ganjil';
        }else if($request->periode == 2){
            $name = 'Genap';
        }else{
            $name = 'Pendek';
        }

        Semester::insert([
            'kode_semester'=> $request->tahun.$request->periode,
            'nama_semester'=> $request->tahun."/".($request->tahun+1).' '.$name,
        ]);

        return redirect()->route('semester.index')->with('success','Berhasil Menambahkan Periode');
    }

    /**
     * Display the specified resource.
     */
    public function show(Semester $semester)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Semester $semester)
    {
        return inertia('Semester/Edit',[
            'semester'=> $semester,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Semester $semester)
    {
        $request->validate([
            'tahun'=>'required',
            'periode'=>'required',
        ]);

        // create name
        if($request->periode == 1){
            $name = 'Ganjil';
        }else if($request->periode == 2){
            $name = 'Genap';
        }else{
            $name = 'Pendek';
        }

        $semester->update([
            'kode_semester'=> $request->tahun.$request->periode,
            'nama_semester'=> $request->tahun."/".($request->tahun+1).' '.$name,
        ]);
        return redirect()->route('semester.index')->with('success','Berhasil mengubah Periode');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Semester $semester)
    {
        $semester->delete();
        return redirect()->route('semester.index')->with('success','Berhasil menghapus Periode');
    }
}
