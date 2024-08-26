import React, { useState } from 'react'
import Master from '../Layout/Master'
import { Inertia } from '@inertiajs/inertia';

export default function Edit({ errors, prodi }) {

    const [kode_prodi, setKodeProdi] = useState(prodi.kode_prodi);
    const [nama_prodi, setNamaProdi] = useState(prodi.nama_prodi);

    const SimpanData = (e) => {
        e.preventDefault();

        Inertia.put(`/prodi/${prodi.id_prodi}`, {
            kode_prodi, nama_prodi
        });
    }

    return (
        <Master>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={SimpanData}>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Kode Program Studi</label>
                                    <input value={kode_prodi} type="text" class="form-control" onChange={(e) => { setKodeProdi(e.target.value) }} />
                                    {errors.kode_prodi && <small class="form-text text-danger">{errors.kode_prodi}</small>}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Nama Program Studi</label>
                                    <input value={nama_prodi} type="text" class="form-control" onChange={(e) => { setNamaProdi(e.target.value) }} />
                                    {errors.nama_prodi && <small class="form-text text-danger">{errors.nama_prodi}</small>}
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
