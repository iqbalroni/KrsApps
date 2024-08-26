import React, { useState } from 'react'
import Master from '../Layout/Master';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Index({ matkul, session }) {

    const [id, setId] = useState(null);
    const [nama, setNama] = useState(null);
    const [confirm, setConfirm] = useState(false);

    const hapusData = () => {
        Inertia.delete(`/mataKuliah/${id}`, {
            onSuccess: () => {
                setConfirm(false);
            }
        })
    }
    return (
        <Master>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    Data Mata Kuliah
                    <Link href='/mataKuliah/create' className="btn btn-success">
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
                                <th scope="col">Kode Matkul</th>
                                <th scope="col">Nama Mata Kuliah</th>
                                <th scope="col">Program Studi</th>
                                <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {matkul.map((el, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{el.kode_matkul}</td>
                                    <td>{el.nama_matkul}</td>
                                    <td>{el.nama_prodi}</td>
                                    <td>
                                        <Link href={`/mataKuliah/${el.id_matkul}/edit`} className='btn btn-warning mr-1'>Edit</Link>
                                        <button onClick={() => {
                                            setId(el.id_matkul);
                                            setNama(el.nama_matkul);
                                            setConfirm(true);
                                        }} className='btn btn-danger'>Hapus</button>
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
