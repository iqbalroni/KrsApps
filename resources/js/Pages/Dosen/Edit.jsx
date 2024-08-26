import React, { useState } from 'react'
import Master from '../Layout/Master'
import { Inertia } from '@inertiajs/inertia';

export default function Add({ errors,dosen }) {

    const [nidn, setNidn] = useState(dosen.nidn);
    const [nama_dosen, setNamaDosen] = useState(dosen.nama_dosen);
    const [email, setEmail] = useState(dosen.email);
    const [password, setPassword] = useState(null);
    const [jenis_kelamin, setJenisKelamin] = useState(dosen.jenis_kelamin);
    const [tanggal_lahir, setTanggalLahir] = useState(dosen.tanggal_lahir);

    const SimpanData = (e) => {
        e.preventDefault();

        Inertia.put(`/dosen/${dosen.id_dosen}`, {
            nama_dosen, nidn, email, password, jenis_kelamin, tanggal_lahir
        });
    }

    return (
        <Master>
            <div className="card">
                <div className="card-header">
                    Data Dosen
                </div>
                <div className="card-body">
                    <form onSubmit={SimpanData}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>NIDN</label>
                                    <input value={nidn} type="number" class="form-control" onChange={(e) => { setNidn(e.target.value) }} />
                                    {errors.nidn && <small class="form-text text-danger">{errors.nidn}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Nama Dosen</label>
                                    <input value={nama_dosen} type="text" class="form-control" onChange={(e) => { setNamaDosen(e.target.value) }} />
                                    {errors.nama_dosen && <small class="form-text text-danger">{errors.nama_dosen}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={email} type="text" class="form-control" onChange={(e) => { setEmail(e.target.value) }} />
                                    {errors.email && <small class="form-text text-danger">{errors.email}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Ganti Password</label>
                                    <input value={password} type="password" class="form-control" onChange={(e) => { setPassword(e.target.value) }} />
                                    {errors.password && <small class="form-text text-danger">{errors.password}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Jenis Kelamin</label>
                                    <select value={jenis_kelamin} class="form-control" onChange={(e) => { setJenisKelamin(e.target.value) }}>
                                        <option value="" selected disabled>Pilih Disini</option>
                                        <option value="L">Laki-laki</option>
                                        <option value="P">Perempuan</option>
                                    </select>
                                    {errors.jenis_kelamin && <small id="emailHelp" class="form-text text-danger">{errors.jenis_kelamin}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Tanggal Lahir</label>
                                    <input value={tanggal_lahir} type="date" class="form-control" onChange={(e) => { setTanggalLahir(e.target.value) }} />
                                    {errors.tanggal_lahir && <small id="emailHelp" class="form-text text-danger">{errors.tanggal_lahir}</small>}
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block" type='submit'>Simpan Data</button>
                    </form>
                </div>
            </div>
        </Master>
    );
}
