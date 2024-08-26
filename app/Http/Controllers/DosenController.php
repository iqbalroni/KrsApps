<?php

namespace App\Http\Controllers;

use App\Models\Dosen;
use Illuminate\Http\Request;

class DosenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = [
            'dosen'=>Dosen::get(),
        ];
        return inertia('Dosen/Index',$data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Dosen/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'nidn'=>'required',
            'nama_dosen'=>'required',
            'email'=>'required',
            'password'=>'required',
            'jenis_kelamin'=>'required',
            'tanggal_lahir'=>'required'
        ]);

        Dosen::insert($data);

        return redirect()->route('dosen.index')->with('success','Berhasil menambahkan data dosen');
    }

    /**
     * Display the specified resource.
     */
    public function show(Dosen $dosen)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Dosen $dosen)
    {
        return inertia('Dosen/Edit',['dosen'=>$dosen]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Dosen $dosen)
    {
        if($request->password == ''){
            $data = $request->validate([
                'nidn'=>'required',
                'nama_dosen'=>'required',
                'email'=>'required',
                'jenis_kelamin'=>'required',
                'tanggal_lahir'=>'required'
            ]);
        }else{
            $data = $request->validate([
                'nidn'=>'required',
                'nama_dosen'=>'required',
                'email'=>'required',
                'password'=>'min:8',
                'jenis_kelamin'=>'required',
                'tanggal_lahir'=>'required'
            ]);

            $data['password'] = bcrypt($request->password);
        }

        $dosen->update($data);

        return redirect()->route('dosen.index')->with('success','Berhasil mengubah data dosen');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dosen $dosen)
    {
        $dosen->delete();
        return redirect()->route('dosen.index')->with('success','Berhasil menghapus data dosen');
    }
}
