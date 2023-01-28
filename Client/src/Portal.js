import React from 'react'


import {Outlet} from "react-router-dom";
import Sidebar from './Layouts/Sidebar';
import Topbar from './Layouts/Topbar';
function Portal() {

    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <div class="container-fluid">
                      <Outlet/>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Portal;