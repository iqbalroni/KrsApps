import React, { useState } from 'react'
import Master from '../Layout/Master';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';
import moment from 'moment';

export default function Index({ data, baseUrl, title, session }) {
    const [message, setMessage] = useState({});
    const [confirm, setConfirm] = useState({
        status: false,
    });

    const handlingDelete = () => {
        Inertia.delete(`${baseUrl}/${confirm.id_informasi}`, {
            onSuccess: () => {
                setConfirm({ status: false });
            }
        });
    }

    return (
        <Master>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    Data {title}
                    <Link href={`${baseUrl}/create`} className="btn btn-success">
                        Tambah Data {title}
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
                                <th scope="col">Judul Informasi</th>
                                <th scope="col">Status</th>
                                <th scope="col">Lihat Pesan</th>
                                <th scope='col'>Tanggal dibuat</th>
                                <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((el, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el.judul}</td>
                                    <td>{el.status == 1 ? 'Aktif' : 'Tidak Aktif'}</td>
                                    <td className='text-center'>
                                        <button type="button" onClick={() => {
                                            setMessage({
                                                'deskripsi': el.deskripsi,
                                                'judul': el.judul
                                            });
                                        }} class="btn btn-sm btn-primary" data-toggle="modal" data-target="#message">
                                            <i className='fas fa-eye'></i>
                                        </button>
                                    </td>
                                    <td>{moment(el.create_at).format('D MMMM YYYY')}</td>
                                    <td>
                                        <Link href={`${baseUrl}/${el.id_informasi}/edit`} className='btn btn-warning'>Edit</Link>
                                        <button className='btn btn-danger ml-2' onClick={() => {
                                            setConfirm({
                                                'judul': el.judul,
                                                'id_informasi': el.id_informasi,
                                                'status': true,
                                            })
                                        }}>Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="modal fade" id="message" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h4>{message.judul}</h4>
                            {message.deskripsi}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                            {/* <button type="button" class="btn btn-primary">Understood</button> */}
                        </div>
                    </div>
                </div>
            </div>

            {confirm.status && <div class="modal fade show d-block">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Perhatian!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            apakah anda yakin ingin mengapus informasi tentang {confirm.judul} ?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Batal</button>
                            <button type="button" onClick={handlingDelete} class="btn btn-danger">Hapus</button>
                        </div>
                    </div>
                </div>
            </div>}
        </Master>
    )
}
