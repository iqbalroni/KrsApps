import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import Master from "../Layout/Master";

export default function Detail({ biodata }) {
    const nilai = biodata.binggris + biodata.mtk + biodata.bindo;
    return (
        <Master>
            <div className="card mt-3">
                <div className="card-header d-flex justify-content-between align-items-center">
                    Detail Mahasiswa
                    <Link href='/mahasiswa' className="btn btn-primary">
                        Kembali
                    </Link>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="https://via.placeholder.com/120" alt="Profile Picture" class="profile-img mb-3" />
                                <h3 class="card-title">{biodata.nim}</h3>
                                <h5 class="card-title">{biodata.name}</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quaerat corrupti, excepturi inventore consequatur reiciendis aut magni quam accusantium iste?</p>
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <h5>Jenis Kelamin</h5>
                                        <p class="text-muted">{biodata.jenis_kelamin == 'P' ? 'Perempuan' : 'Laki-laki'}</p>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <h5>Alamat</h5>
                                        <p class="text-muted">{biodata.alamat}</p>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <h5>Kelas</h5>
                                        <p class="text-muted">{biodata.nama_prodi}</p>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <h5>Tahun Lahir</h5>
                                        <p class="text-muted">{biodata.tanggal_lahir}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Master>
    )
}
