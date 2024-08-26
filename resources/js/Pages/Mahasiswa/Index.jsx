import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Master from "../Layout/Master";

export default function Index({ mahasiswa, session, errors }) {

    const [confirm, setConfirm] = useState(false);
    const [id, setId] = useState('');
    const [nama, setNama] = useState('');

    const deleteAccount = () => {
        Inertia.delete(`/mahasiswa/${id}`, {
            onSuccess: () => {
                setConfirm(false);
            }
        });
    }

    return <Master>
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
                Data Mahasiswa
                <Link href='/mahasiswa/create' className="btn btn-success">
                    Tambah Data
                </Link>
            </div>
            <div className="card-body">
                {session.success && <div class="alert alert-success" role="alert">
                    {session.success}
                </div>}
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>NIM</td>
                            <td>Nama</td>
                            <td>Email</td>
                            <td>Tanggal Lahir</td>
                            <td>Program Studi</td>
                            <td>Aksi</td>
                        </tr>
                    </thead>
                    <tbody>
                        {mahasiswa.map((el, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el.nim}</td>
                                    <td>{el.name}</td>
                                    <td>{el.email}</td>
                                    <td>{el.tanggal_lahir}</td>
                                    <td>{el.nama_prodi}</td>
                                    <td>
                                        <Link href={'/mahasiswa/' + el.id_mahasiswa} className="btn btn-info btn-sm ml-1">
                                            Detail
                                        </Link>
                                        <Link href={'/mahasiswa/' + el.id_mahasiswa + '/edit'} className="btn btn-warning btn-sm ml-1 mr-1">
                                            Edit
                                        </Link>
                                        <button className="btn btn-danger btn-sm" onClick={() => {
                                            setConfirm(true);
                                            setId(el.id_mahasiswa);
                                            setNama(el.name);
                                        }}>
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
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


}
