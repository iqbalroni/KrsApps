import React from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Navbar from './Navbar'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'

export default function Master({ children }) {
    const { auth } = usePage().props;
    const logout = () => {
        Inertia.post('/logout')
    }
    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Navbar />
                        <div class="container-fluid">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

            <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Perhatian!!!</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">Apakah {auth.user.name} {auth.user.nama_dosen} Yakin Ingin Logout?</div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <button class="btn btn-primary" onClick={logout} data-dismiss="modal">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
