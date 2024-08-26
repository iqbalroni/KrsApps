<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use App\Models\Prodi;
use Date;
use Illuminate\Http\Request;
use Str;

class MahasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data_mahasiswa = Mahasiswa::join('prodis','mahasiswas.prodi_id','prodis.id_prodi')->orderBy('id_mahasiswa','desc')->get();
        return inertia('Mahasiswa/Index',[
            'mahasiswa'=>$data_mahasiswa
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data = [
            'prodi' => Prodi::get()
        ];
        return inertia('Mahasiswa/Add',$data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'password'=>'required|min:8',
            'email'=>'required|unique:mahasiswas,email',
            'prodi'=>'required',
            'alamat'=>'required',
            'tanggal_lahir'=>'required',
            'jenis_kelamin'=>'required',
        ]);

        $prodi = Prodi::findOrFail($request->prodi);
        $nim =  $prodi->kode_prodi.Str::random('3');

        $data = [
            'nim'=>$nim,
            'email'=>$request->email,
            'name'=>$request->name,
            'password'=>bcrypt($request->password),
            'prodi_id'=>$request->prodi,
            'alamat'=>$request->alamat,
            'tanggal_lahir'=>$request->tanggal_lahir,
            'jenis_kelamin'=>$request->jenis_kelamin,
            'tanggal_daftar'=>Date::now(),
        ];

        Mahasiswa::insert($data);

        return redirect()->route('mahasiswa.index')->with('success','Berhasil menambahkan data'.$request->nama_siswa);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $biodata = Mahasiswa::find($id)
        ->join('prodis','mahasiswas.prodi_id','prodis.id_prodi')
        ->first();
        return inertia('Mahasiswa/Detail',['biodata'=> $biodata]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $biodata = Mahasiswa::where('id_mahasiswa',$id)
        ->join('prodis','mahasiswas.prodi_id','prodis.id_prodi')
        ->first();
        $prodi = Prodi::get();
        return inertia('Mahasiswa/Edit',['biodata'=> $biodata,'prodi'=>$prodi]);
    }

    public function InputNilai(Request $request, string $id)
    {
        $data = $request->validate([
            'mtk'=>'required',
            'bindo'=>'required',
            'binggris'=>'required',
        ]);

        Mahasiswa::where('id_mahasiswa',$id)->update($data);

        return redirect()->route('mahasiswa.index')->with('success','Data Berhasil Input Nilai');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        if($request->password == ''){
            $data = $request->validate([
                'name'=>'required',
                'email'=>'required',
                'prodi_id'=>'required',
                'alamat'=>'required',
                'tanggal_lahir'=>'required',
                'jenis_kelamin'=>'required',
            ]);
        }else{
            $data = $request->validate([
                'name'=>'required',
                'password'=>'required|min:8',
                'email'=>'required',
                'prodi_id'=>'required',
                'alamat'=>'required',
                'tanggal_lahir'=>'required',
                'jenis_kelamin'=>'required',
            ]);

            $data['password'] = bcrypt($request->password);
        }

        Mahasiswa::find($id)->update($data);

        return redirect()->route('mahasiswa.index')->with('success','Data Berhasil edit');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Mahasiswa::find($id)->delete();

        return redirect()->route('mahasiswa.index')->with('success','Data Berhasil di hapus');
    }
}
