import { usePage } from '@inertiajs/inertia-react';
import moment from 'moment';
import React from 'react';


export default function Navbar() {
    const { semester, auth, notifikasi } = usePage().props;
    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                <i class="fa fa-bars"></i>
            </button>

            <div className="btn btn-primary">{semester.smt_aktif}</div>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown no-arrow mx-1">
                    <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-envelope fa-fw"></i>
                        <span class="badge badge-danger badge-counter">{notifikasi.length}</span>
                    </a>
                    <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                        <h6 class="dropdown-header">
                            Informasi Akademik
                        </h6>
                        {notifikasi.map((el) => (
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="font-weight-bold">
                                    <div class="text-truncate">{el.judul}</div>
                                    <div class="small text-gray-500">{moment(el.created_at).format('d MMMM YYYY')}</div>
                                </div>
                            </a>
                        ))}
                        <a class="dropdown-item text-center small text-gray-500" href="#">Lihat Informasi Selengkapnya</a>
                    </div>
                </li>
                <div class="topbar-divider d-none d-sm-block"></div>
                <li class="nav-item dropdown no-arrow">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">{auth.user.name} {auth.user.nama_dosen}</span>
                        <img class="img-profile rounded-circle"
                            src="https://placehold.co/400" />
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>
            </ul>

        </nav>
    )
}
