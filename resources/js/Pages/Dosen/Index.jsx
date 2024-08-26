import React, { useState } from 'react'
import Master from '../Layout/Master';
import { Link, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Index({ dosen, session }) {

    const [confirm, setConfirm] = useState(false);
    const [id, setId] = useState(null);
    const [nama, setNama] = useState(null);

    const { auth } = usePage().props;


    const deleteAccount = () => {
        Inertia.delete(`/dosen/${id}`, {
            onSuccess: () => {
                setConfirm(false);
            }
        });
    }

    return (
        <Master>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    Data Dosen
                    {auth.isAdmin && <Link href='/dosen/create' className="btn btn-success">
                        Tambah Data
                    </Link>}
                </div>
                <div className="card-body">
                    {session.success && <div class="alert alert-success" role="alert">
                        {session.success}
                    </div>}
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">NIDN</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Email</th>
                                {auth.isAdmin && <th scope="col">Aksi</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {dosen.map((el, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el.nidn}</td>
                                    <td>{el.nama_dosen}</td>
                                    <td>{el.email}</td>
                                    {auth.isAdmin && <td>
                                        <Link href={`/dosen/${el.id_dosen}/edit`} className='btn btn-warning'>Edit</Link>
                                        <button
                                            onClick={() => {
                                                setConfirm(true);
                                                setNama(el.nama_dosen);
                                                setId(el.id_dosen);
                                            }}
                                            className='btn btn-danger ml-1'>Hapus</button>
                                    </td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {confirm && <div class="modal fade show d-block">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Perhatian!!</h5>
                        </div>
                        <div class="modal-body">
                            Apakah anda ingin menghapus data {nama}?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onClick={() => {
                                setConfirm(false);
                            }} >Batal</button>
                            <button type="button" class="btn btn-primary" onClick={deleteAccount}>Hapus Data</button>
                        </div>
                    </div>
                </div>
            </div>
            }
        </Master>
    )
}
