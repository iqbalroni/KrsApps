import React, { useState } from 'react'
import Master from '../Layout/Master';
import { Inertia } from '@inertiajs/inertia';

export default function Add({ errors, user }) {

    const [data, setData] = useState({
        name: user.name,
        email: user.email,
        password: ''
    });

    const handlingInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const simpanData = (e) => {
        e.preventDefault();
        Inertia.put(`/admin/${user.id}`, data);
    }

    return (
        <Master>
            <div className="card">
                <div className="card-header">
                    Tambah Data Admin
                </div>
                <div className="card-body">
                    <form onSubmit={simpanData}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name='name' value={data.name} class="form-control" onChange={handlingInput} />
                                    {errors.name && <small id="nameHelp" class="form-text text-danger">{errors.name}</small>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name='email' value={data.email} class="form-control" onChange={handlingInput} />
                                    {errors.email && <small id="emailHelp" class="form-text text-danger">{errors.email}</small>}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Ganti Password</label>
                                    <input type="password" name='password' value={data.password} class="form-control" onChange={handlingInput} />
                                    {errors.password && <small id="passwordHelp" class="form-text text-danger">{errors.password}</small>}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className='btn btn-block btn-primary'>Simpan Data</button>
                    </form>
                </div>
            </div>
        </Master>
    )
}
