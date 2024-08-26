import React, { useState } from 'react'
import Master from '../Layout/Master'
import { Inertia } from '@inertiajs/inertia';

export default function Add({ errors, prodi, matkul }) {

    const [data, setData] = useState({
        kode_matkul: matkul.kode_matkul,
        nama_matkul: matkul.nama_matkul,
        prodi_id: matkul.prodi_id
    });

    const handlingInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submited = (e) => {
        e.preventDefault();
        Inertia.put(`/mataKuliah/${matkul.id_matkul}`, data);
    }
    return (
        <Master>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={submited}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Kode Mata kuliah</label>
                                    <input type="text" value={data.kode_matkul} name='kode_matkul' class="form-control" onChange={handlingInput} />
                                    {errors.kode_matkul && <small class="form-text text-danger">{errors.kode_matkul}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Nama Mata Kuliah</label>
                                    <input type="text" value={data.nama_matkul} name='nama_matkul' class="form-control" onChange={handlingInput} />
                                    {errors.nama_matkul && <small class="form-text text-danger">{errors.nama_matkul}</small>}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Prodi</label>
                                    <select class="form-control" name='prodi_id' value={data.prodi_id} onChange={handlingInput}>
                                        <option value="" selected>Pilih Disini</option>
                                        {prodi.map((el, index) => (
                                            <option key={index} value={el.id_prodi}>{el.nama_prodi}</option>
                                        ))}
                                    </select>
                                    {errors.prodi_id && <small id="emailHelp" class="form-text text-danger">{errors.prodi_id}</small>}
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-block btn-primary'>Simpan Data</button>
                    </form>
                </div>
            </div>
        </Master>
    )
}
