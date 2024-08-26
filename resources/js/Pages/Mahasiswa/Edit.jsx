import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Master from "../Layout/Master";

export default function Add({ errors, biodata, prodi }) {

    const [nama, setNama] = useState(biodata.name);
    const [jenisKelamin, setJenisKelamin] = useState(biodata.jenis_kelamin);
    const [password, setPassword] = useState('');
    const [tanggalLahir, setTanggalLahir] = useState(biodata.tanggal_lahir);
    const [prodis, setProdis] = useState(biodata.prodi_id);
    const [alamat, setAlamat] = useState(biodata.alamat);
    const [email, setEmail] = useState(biodata.email);

    const submited = async (e) => {
        e.preventDefault();
        Inertia.put(`/mahasiswa/${biodata.id_mahasiswa}`, {
            name: nama,
            password,
            prodi_id:prodis,
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
                                    <input value={nama} type="text" class="form-control" onChange={(e) => { setNama(e.target.value) }} />
                                    {errors.name && <small id="emailHelp" class="form-text text-danger">{errors.name}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={email} type="email" class="form-control" onChange={(e) => { setEmail(e.target.value) }} />
                                    {errors.email && <small id="emailHelp" class="form-text text-danger">{errors.email}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Jenis Kelamin</label>
                                    <select value={jenisKelamin} class="form-control" onChange={(e) => { setJenisKelamin(e.target.value) }}>
                                        <option value="L">Laki-laki</option>
                                        <option value="P">Perempuan</option>
                                    </select>
                                    {errors.jenis_kelamin && <small id="emailHelp" class="form-text text-danger">{errors.jenis_kelamin}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Ganti Password</label>
                                    <input type="password" class="form-control" onChange={(e) => { setPassword(e.target.value) }} />
                                    {errors.password && <small id="emailHelp" class="form-text text-danger">{errors.password}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Tanggal Lahir</label>
                                    <input value={tanggalLahir} type="date" class="form-control" onChange={(e) => { setTanggalLahir(e.target.value) }} />
                                    {errors.tanggal_lahir && <small id="emailHelp" class="form-text text-danger">{errors.tanggal_lahir}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Jurusan</label>
                                    <select value={prodis} class="form-control" onChange={(e) => { setProdis(e.target.value) }}>
                                        <option selected disabled>Pilih Disini</option>
                                        {prodi.map((el, index) => (
                                            <option key={index} value={el.id_prodi}>{el.nama_prodi}</option>
                                        ))}
                                    </select>
                                    {errors.prodi_id && <small id="emailHelp" class="form-text text-danger">{errors.prodi_id}</small>}
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Alamat Mahasiswa</label>
                            <textarea value={alamat} class="form-control" rows="2" onChange={(e) => { setAlamat(e.target.value) }}></textarea>
                            {errors.alamat && <small id="emailHelp" class="form-text text-danger">{errors.alamat}</small>}
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Simpan Mahasiswa</button>
                    </form>
                </div>
            </div>
        </Master>
    );
}
