import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'

export default function Login({ errors }) {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const submitLogin = (e) => {
        e.preventDefault();
        Inertia.post('/login', {
            name: username,
            password: password
        });
    }

    return (
        <div className='bg-login'>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={submitLogin}>
                        <h3>Login</h3>
                        <hr />
                        <div className="form-group">
                            <label>Username / NIDN / NIM / Email</label>
                            <input value={username} type="text" class="form-control" onChange={(e) => { setUsername(e.target.value) }} />
                            {errors.name && <small id="emailHelp" class="form-text text-danger">{errors.name}</small>}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input value={password} type="password" class="form-control" onChange={(e) => { setPassword(e.target.value) }} />
                            {errors.password && <small id="emailHelp" class="form-text text-danger">{errors.password}</small>}
                        </div>
                        <button className='btn btn-primary'>Login Aplikasi</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
