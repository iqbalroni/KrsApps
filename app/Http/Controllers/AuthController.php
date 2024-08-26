<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(){
        return inertia('Auth/Login');
    }

    public function Auth(Request $request){
        $cre = $request->validate([
            'name' => 'required',
            'password' => 'required',
        ]);

        if(Auth::guard('web')->attempt($cre)){
            $request->session()->regenerate();
            return redirect()->route('dashboard');
        }
        if(Auth::guard('dosen')->attempt([
            'nidn'=>$request->name,
            'password'=>$request->password,
        ])){
            $request->session()->regenerate();
            return redirect()->route('dashboard');
        }
        if(Auth::guard('mahasiswa')->attempt([
            'nim'=>$request->name,
            'password'=>$request->password,
        ])){
            $request->session()->regenerate();
            return redirect()->route('dashboard');
        }

        return redirect()->route('login')->withErrors([
            'name' => 'Username Atau Password salah!!',
        ])->onlyInput('username');
    }

    public function logout(){
        Auth::logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();

        return redirect()->route('login');
    }
}
