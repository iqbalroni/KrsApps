import React, { useState } from 'react'
import Master from '../Layout/Master'
import { Inertia } from '@inertiajs/inertia';

export default function Add({ errors, semester }) {

    const [data, setData] = useState({
        tahun: semester.kode_semester.toString().slice(0,4),
        periode: semester.kode_semester.toString().slice(-1)
    });

    const SimpanData = (e) => {
        e.preventDefault();

        Inertia.put(`/semester/${semester.id_semester}`, data);
    }

    const handlingInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <Master>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={SimpanData}>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Tahun Semester</label>
                                    <input value={data.tahun} name='tahun' type="number" class="form-control" onChange={handlingInput} />
                                    {errors.tahun && <small class="form-text text-danger">{errors.tahun}</small>}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Periode</label>
                                    <select value={data.periode} name='periode' class="form-control" onChange={handlingInput}>
                                        <option value="1">Ganjil</option>
                                        <option value="2">Genap</option>
                                        <option value="3">Pendek</option>
                                    </select>
                                    {errors.periode && <small id="emailHelp" class="form-text text-danger">{errors.periode}</small>}
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
