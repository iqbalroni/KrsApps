import React, { useState } from 'react'
import Master from '../Layout/Master'
import { Link } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia';

export default function Edit({ title, baseUrl, errors,data}) {

    const [form, setForm] = useState({
        'judul':data.judul,
        'deskripsi':data.deskripsi,
        'status':data.status
    });

    const handlingInput = (e) => {
        const {name,value} = e.target;

        setForm((result)=>(
            {
                ...result,[name]:value
            }
        ));
    }

    const handlingSubmit = (e)=>{
        e.preventDefault();

        Inertia.put(`${baseUrl}/${data.id_informasi}`,form);
    }

    return (
        <Master>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    Data {title}
                    <Link href={`${baseUrl}`} className="btn btn-success">
                        Kembali
                    </Link>
                </div>
                <div className="card-body">
                    <form className="row" onSubmit={handlingSubmit}>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Judul Informasi</label>
                                <input value={form.judul} name='judul' type="text" class="form-control" onChange={handlingInput} />
                                {errors.judul && <small class="form-text text-danger">{errors.judul}</small>}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Status Aktif</label>
                                <select class="form-control" name='status' value={form.status} onChange={handlingInput}>
                                    <option value="" selected disabled>Pilih Disini</option>
                                    <option value="1">Aktif</option>
                                    <option value="0">Tidak Aktif</option>
                                </select>
                                {errors.status && <small id="emailHelp" class="form-text text-danger">{errors.status}</small>}
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div class="form-group">
                                <label >Deskripsi</label>
                                <textarea class="form-control" name='deskripsi' onChange={handlingInput} rows="3">{form.deskripsi}</textarea>
                                {errors.deskripsi && <small id="emailHelp" class="form-text text-danger">{errors.deskripsi}</small>}
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <button type="submit" className='btn btn-primary btn-sm'>Edit Data {title}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Master>
    )
}
