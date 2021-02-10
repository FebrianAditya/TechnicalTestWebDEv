import React from "react"
import "../SidebarBeforeLogin/Sidebar.css"
import { NavLink } from "react-router-dom"

function SidebarBeforeLogin() {

    return(
        <>
            <div className="sidebar-header">
                <h3>Dashboard Kit</h3>
            </div>
            <ul className="lisst-unstyled components">
                <li>
                    <NavLink exact to="/">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
            </ul>
        </>
    )
}

export default SidebarBeforeLogin