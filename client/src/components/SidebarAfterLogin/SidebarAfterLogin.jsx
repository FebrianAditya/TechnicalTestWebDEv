import React from "react"
import "../SidebarAfterLogin/Sidebar.css"
import { NavLink } from "react-router-dom"

function SidebarAfterLogin() {

    return(
        <>
            <div className="sidebar-header">
                <h3>Dashboard Kit</h3>
            </div>
            <ul className="lisst-unstyled components">
                <li>
                    <NavLink exact to="/overview">Overview</NavLink>
                </li>
                <li>
                    <NavLink to="/ticket">Tickets</NavLink>
                </li>
            </ul>
        </>
    )
}

export default SidebarAfterLogin