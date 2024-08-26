import React, { useState } from 'react'
import Master from '../Layout/Master'
import { Link } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia';

export default function Index({ admin, session }) {
    const [id, setId] = useState(null);
    const [nama, setNama] = useState(null);
    const [confirm, setConfirm] = useState(false);

    const deleteAccount = () => {
        Inertia.delete(`/admin/${id}`, {
            onSuccess: () => {
                setConfirm(false);
            }
        });
    }
    return (
        <Master>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    Data Admin
                    <Link href='/admin/create' className="btn btn-success">
                        Tambah Data
                    </Link>
                </div>
                <div className="card-body">
                    {session.success && <div class="alert alert-success" role="alert">
                        {session.success}
                    </div>}
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama Pengguna</th>
                                <th scope="col">Email</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admin.map((el, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{el.name}</td>
                                    <td>{el.email}</td>
                                    <td>
                                        <Link href={`/admin/${el.id}/edit`} className='btn btn-warning'>Edit</Link>
                                        <button onClick={() => {
                                            setId(el.id);
                                            setNama(el.name);
                                            setConfirm(true);
                                        }} className='btn btn-danger ml-1'>Hapus</button>
                                    </td>
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
