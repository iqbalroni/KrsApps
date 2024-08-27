import React from 'react'
import Master from '../Layout/Master'
import { Link } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

export default function Index({ data, session }) {
    return (
        <Master>
            <div class="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    Data Semester
                    <Link href='/semester/create' className="btn btn-success">
                        Tambah Data
                    </Link>
                </div>
                <div class="card-body">
                    {session.success && <div class="alert alert-primary" role="alert">
                        {session.success}
                    </div>}
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Semester</th>
                                <th>Status Aktif</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((el, index) => (
                                <tr>
                                    <td scope="row">{index + 1}</td>
                                    <td>{el.nama_semester}</td>
                                    <td>{el.status_aktif ? 'Aktif' : 'Tidak Aktif'}</td>
                                    <td>
                                        <Link href={`semester/${el.id_semester}/edit`} class="btn btn-warning mr-1">Edit</Link>
                                        <button onClick={() => {
                                            Inertia.delete(`/semester/${el.id_semester}`)
                                        }} class="btn btn-danger">Hapus</button>
                                        {el.status_aktif == false &&
                                            <button onClick={() => {
                                                Inertia.post(`/semester/${el.id_semester}/aktif`)
                                            }} class="btn btn-primary ml-1">Aktifkan</button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Master>
    )
}
