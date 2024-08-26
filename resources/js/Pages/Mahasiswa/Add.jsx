import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Master from "../Layout/Master";

export default function Add({ errors, prodi }) {

    const [nama, setNama] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');
    const [password, setPassword] = useState('');
    const [tanggalLahir, setTanggalLahir] = useState('');
    const [prodis, setProdis] = useState('');
    const [alamat, setAlamat] = useState('');
    const [email, setEmail] = useState('');

    const submited = async (e) => {
        e.preventDefault();
        Inertia.post('/mahasiswa', {
            name: nama,
            password,
            prodi:prodis,
            jenis_kelamin: jenisKelamin,
            alamat: alamat,
            tanggal_lahir:tanggalLahir,
            email
        });
    }

    return (
        <Master>
            <div className="card mt-3">
                <div className="card-header d-flex justify-content-between align-items-center">
                    Tambah Data Mahasiswa
                    <Link href='/mahasiswa' className="btn btn-primary">
                        Kembali
                    </Link>
                </div>
                <div className="card-body">
                    <form onSubmit={submited}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Nama Mahasiswa</label>
                                    <input type="text" class="form-control" onChange={(e) => { setNama(e.target.value) }} />
                                    {errors.nama_siswa && <small id="emailHelp" class="form-text text-danger">{errors.nama_siswa}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" onChange={(e) => { setEmail(e.target.value) }} />
                                    {errors.email && <small id="emailHelp" class="form-text text-danger">{errors.email}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Jenis Kelamin</label>
                                    <select class="form-control" onChange={(e) => { setJenisKelamin(e.target.value) }}>
                                        <option value="" selected disabled>Pilih Disini</option>
                                        <option value="L">Laki-laki</option>
                                        <option value="P">Perempuan</option>
                                    </select>
                                    {errors.jenis_kelamin && <small id="emailHelp" class="form-text text-danger">{errors.jenis_kelamin}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" onChange={(e) => { setPassword(e.target.value) }} />
                                    {errors.password && <small id="emailHelp" class="form-text text-danger">{errors.password}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Tanggal Lahir</label>
                                    <input type="date" class="form-control" onChange={(e) => { setTanggalLahir(e.target.value) }} />
                                    {errors.tanggal_lahir && <small id="emailHelp" class="form-text text-danger">{errors.tanggal_lahir}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Jurusan</label>
                                    <select class="form-control" onChange={(e) => { setProdis(e.target.value) }}>
                                        <option value="" selected disabled>Pilih Disini</option>
                                        {prodi.map((el, index) => (
                                            <option key={index} value={el.id_prodi}>{el.nama_prodi}</option>
                                        ))}
                                    </select>
                                    {errors.prodi && <small id="emailHelp" class="form-text text-danger">{errors.prodi}</small>}
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Alamat Mahasiswa</label>
                            <textarea class="form-control" rows="2" onChange={(e) => { setAlamat(e.target.value) }}></textarea>
                            {errors.alamat && <small id="emailHelp" class="form-text text-danger">{errors.alamat}</small>}
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Simpan Mahasiswa</button>
                    </form>
                </div>
            </div>
        </Master>
    );
}
