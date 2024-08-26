import React, { useState } from 'react'
import Master from '../Layout/Master';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Index({ prodi, session }) {

    const [confirm, setConfirm] = useState(false);
    const [nama, setNama] = useState('');
    const [id, setId] = useState('');

    const hapusData = () => {
        Inertia.delete(`/prodi/${id}`, {
            onSuccess: () => {
                setConfirm(false);
            }
        });
    }

    return (
        <Master>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    Data Program Studi
                    <Link href='/prodi/create' className="btn btn-success">
                        Tambah Data
                    </Link>
                </div>
                <div className="card-body">
                    {session.success &&
                        <div class="alert alert-success" role="alert">
                            {session.success}
                        </div>}
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <td>No</td>
                                <td>Kode Prodi</td>
                                <td>Nama Prodi</td>
                                <td>Aksi</td>
                            </tr>
                        </thead>
                        <tbody>
                            {prodi.map((el, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el.kode_prodi}</td>
                                    <td>{el.nama_prodi}</td>
                                    <td>
                                        <Link href={`/prodi/${el.id_prodi}/edit`} className='btn btn-warning'>Edit</Link>
                                        <button className='btn btn-danger ml-1' onClick={() => {
                                            setConfirm(true);
                                            setId(el.id_prodi);
                                            setNama(el.nama_prodi);
                                        }}>Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {confirm && <div class="modal show d-block" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Perhatian!!</h5>
                        </div>
                        <div class="modal-body">
                            <p>Apakah Anda ingin menghapus data {nama} ini?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onClick={() => {
                                setConfirm(false);
                            }}>Batal</button>
                            <button type="button" class="btn btn-primary" onClick={hapusData}>Hapus</button>
                        </div>
                    </div>
                </div>
            </div>}
        </Master>
    )
}
