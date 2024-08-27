import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function Master({ children }) {
    const { auth,semester } = usePage().props;

    const logoutPage = () => {
        Inertia.post('/logout')
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <a class="navbar-brand" href="#">KrsApps {semester.smt_aktif}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link class="nav-link" href="/dashboard">Dashboard</Link>
                        </li>
                        {(auth.isDosen || auth.isMahasiswa) &&
                            <li class="nav-item">
                                <Link class="nav-link" href="/listDosen">Daftar Dosen</Link>
                            </li>}
                        {auth.isAdmin && (
                            <>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Pengguna
                                    </a>
                                    <div class="dropdown-menu">
                                        <Link class="dropdown-item" href="/admin">Admin</Link>
                                        <Link class="dropdown-item" href="/mahasiswa">Mahasiswa</Link>
                                        <Link class="dropdown-item" href="/dosen">Dosen</Link>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Data Akademik
                                    </a>
                                    <div class="dropdown-menu">
                                        <Link class="dropdown-item" href="/prodi">Program Studi</Link>
                                        <Link class="dropdown-item" href="/mataKuliah">Mata Kuliah</Link>
                                        <Link class="dropdown-item" href="/semester">Semester</Link>
                                    </div>
                                </li>
                            </>
                        )}

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                {auth.user.name}
                                {auth.user.nama_dosen}
                            </a>
                            <div class="dropdown-menu">
                                <a onClick={logoutPage} class="dropdown-item cursor-pointer" >Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="patern"></div>

            <div class="main-content">
                {children}
            </div>
        </div>
    );
}
