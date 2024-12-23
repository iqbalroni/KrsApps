<?php

namespace App\Http\Middleware;

use App\Models\Informasi;
use App\Models\ProfilKampus;
use App\Models\Semester;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            // session
            'session' => [
                'success'   => fn () => $request->session()->get('success'),
            ],

            'auth' => [
                'user' => $request->user() ? $request->user()->only('name', 'email','nama_dosen') : null,
                'isAdmin' => Auth::guard('web')->check(),
                'isDosen' => Auth::guard('dosen')->check(),
                'isMahasiswa' => Auth::guard('mahasiswa')->check(),
            ],

            'semester'=>[
                'smt_aktif' => Semester::where('status_aktif',true)->first()->nama_semester,
            ],

            'profil'=> ProfilKampus::where('id_kampus',1)->first(),

            'notifikasi'=>Informasi::where('status',1)->get(),
        ]);
    }
}
