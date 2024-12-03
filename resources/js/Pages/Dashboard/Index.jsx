import React from 'react'
import Master from '../Layout/Master';
import { usePage } from '@inertiajs/inertia-react';

export default function Index({ data }) {
    const { auth,profil } = usePage().props;

    return (
        <Master>
            <div className="card">
                <div className="card-body">
                    <div className="badge badge-info">
                        {auth.isAdmin ? 'ADMINISTRATOR' : auth.isMahasiswa ? 'MAHASISWA' : 'DOSEN'}
                    </div>
                    <br />
                    <h3 className='font-weight-bold'>{profil.nama_kampus}</h3>
                    Selamat datang {auth.user.name} / {auth.user.email} di dashboard,Aplikasi Penilaian Mahasiswa Berbasis Website
                </div>
            </div>

            {(auth.isAdmin || auth.isDosen) && (
                <div className="row mt-3">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className='font-weight-bold'>{data['prodi']} Jumlah Program Studi</h4>
                                <span>Jumlah data program studi yang terdaftar</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className='font-weight-bold'>{data['dosen']} Dosen</h4>
                                <span>Jumlah data dosen yang terdaftar</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className='font-weight-bold'>{data['mahasiswa']} Terdaftar</h4>
                                <span>Mahasiswa Terdaftar di Aplikasi</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className='font-weight-bold'>{data['matkul']} Mata Kuliah</h4>
                                <span>Mata kuliah tersedia di kampus kami</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className='font-weight-bold'>{data['admin']} Pengelolah</h4>
                                <span>Terdapat pengelolah / admin di kampus kami</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Master>
    )
}
