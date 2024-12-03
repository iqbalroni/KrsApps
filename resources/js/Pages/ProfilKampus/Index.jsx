import React, { useState } from 'react'
import Master from '../Layout/Master';
import { Inertia } from '@inertiajs/inertia';

export default function Index({ baseUrl, title, data, errors,session }) {
    const [form, setForm] = useState({
        nama_kampus: data.nama_kampus,
        singkatan: data.singkatan,
        email: data.email,
        alamat: data.alamat,
    });

    const handlingInput = (e)=>{
        const {name,value} = e.target;
        setForm((result)=>({
            ...result,[name]:value
        }));
    }

    const handlingSubmit = (e)=>{
        e.preventDefault();
        console.log(form);

        Inertia.post('/profilKampus/create',form);
    }

    return (
        <Master>
            <div className="card">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                {session.success && <div class="alert alert-success" role="alert">
  {session.success}
</div>}
                    <form onSubmit={handlingSubmit} className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Nama Kampus</label>
                                <input type="text" class="form-control" value={form.nama_kampus} name='nama_kampus' onChange={handlingInput} />
                                {errors.nama_kampus && <small id="emailHelp" class="form-text text-danger">{errors.nama_kampus}</small>}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Singkatan</label>
                                <input type="text" class="form-control" value={form.singkatan} name='singkatan' onChange={handlingInput} />
                                {errors.singkatan && <small id="emailHelp" class="form-text text-danger">{errors.singkatan}</small>}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" name='email' onChange={handlingInput} value={form.email} />
                                {errors.email && <small id="emailHelp" class="form-text text-danger">{errors.email}</small>}
                            </div></div>
                        <div className="col-sm-6 d-flex">
                            <div className="">
                                <span>Logo sedang digunakan</span>
                                <img src={'/assets-kampus/' + data.logo} className='logo-upload' />
                            </div>
                            <div className="form-group ml-3">
                                <label>Ganti Logo Kampus</label>
                                <input type="file" class="form-control" value='' name='logo' handlingInput={handlingInput} />
                                {errors.logo && <small id="emailHelp" class="form-text text-danger">{errors.logo}</small>}
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div class="form-group">
                                <label>Alamat Kampus</label>
                                <textarea class="form-control" onChange={handlingInput} name='alamat' rows="3">{form.alamat}</textarea>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <button type="submit" className='btn btn-primary'>Simpan Data {title}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Master>
    )
}
