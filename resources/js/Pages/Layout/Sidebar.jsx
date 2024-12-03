import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function Sidebar() {
    const { auth,profil } = usePage().props;

    return (
        <ul class="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">

            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon">
                    <i class="fas fa-frog"></i>
                </div>
                <div class="sidebar-brand-text">
                    Siakad.JS
                    <p>{profil.nama_kampus}</p>
                </div>
            </a>

            <hr class="sidebar-divider my-0" />

            <li class="nav-item">
                <Link class="nav-link" href="/dashboard">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <hr class="sidebar-divider" />

            {(auth.isDosen || auth.isMahasiswa) &&
                <>
                    <div class="sidebar-heading">
                        Daftar data kampus
                    </div>
                    <li class="nav-item">
                        <Link class="nav-link" href="/listDosen">
                            <i class="fas fa-fw fa-chart-area"></i>
                            <span>Charts</span></Link>
                    </li>
                </>
            }

            {auth.isAdmin && <>
                <div class="sidebar-heading">
                    Data Profil
                </div>
                <li className="nav-item">
                    <Link class='nav-link' href='/profilKampus'>
                        <i className='fas fa-building'></i>
                        <span>Profil Kampus</span>
                    </Link>
                </li>
                <div class="sidebar-heading">
                    Data Master
                </div>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pengguna"
                        aria-expanded="true" aria-controls="pengguna">
                        <i class="fas fa-fw fa-user"></i>
                        <span>Data Pengguna</span>
                    </a>
                    <div id="pengguna" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <Link class="collapse-item" href="/admin">Admin</Link>
                            <Link class="collapse-item" href="/dosen">Dosen</Link>
                            <Link class="collapse-item" href="/mahasiswa">Mahasiswa</Link>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#akademik"
                        aria-expanded="true" aria-controls="akademik">
                        <i class="fas fa-fw fa-database"></i>
                        <span>Data Akademik</span>
                    </a>
                    <div id="akademik" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <Link class="collapse-item" href="/prodi">Program Studi</Link>
                            <Link class="collapse-item" href="/mataKuliah">Mata Kuliah</Link>
                            <Link class="collapse-item" href="/semester">Semester</Link>
                        </div>
                    </div>
                </li></>}

            <hr class="sidebar-divider d-none d-md-block" />

            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    )
}
