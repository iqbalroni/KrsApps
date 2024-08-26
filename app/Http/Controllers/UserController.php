<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = [
            'admin'=>User::get(),
        ];
        return inertia('Admin/Index',$data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'=>'required',
            'email'=>'required|unique:users,email|email',
            'password'=>'min:8|required'
        ]);

        $data['password'] = bcrypt($request->password);

        User::insert($data);

        return redirect()->route('admin.index')->with('success','berhasil menambahkan akun admin');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return inertia('Admin/Edit',[
            'user'=>User::findOrFail($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        if($request->password == null){
            $data = $request->validate([
                'name'=>'required',
                'email'=>'required|unique:users,email,'.$id,
            ]);
        }else{
            $data = $request->validate([
                'name'=>'required',
                'email'=>'required|unique:users,email,'.$id,
                'password'=>'min:8|required'
            ]);

            $data['password'] = bcrypt($request->password);
        }

        // dd($data);

        
        // $2y$10$joq/wIqzzlnl1h9FjVOTiuUcrctaIFifZ.oYYHt9xdNpKLa5OKw2C

        User::find($id)->update($data);

        return redirect()->route('admin.index')->with('success','berhasil mengupdate akun admin');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return redirect()->route('admin.index')->with('success','berhasil menghapus akun admin');
    }
}
