import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../styles/sidenav.css"
function SideNav() {
    return (
        <div className="sidenav px-3 pt-10 pl-2">
            <h2 className="header" > <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h2><br></br><br></br>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/leads">Leads</NavLink>
            <NavLink to="#">Reports</NavLink>
            <NavLink to="#">Settings</NavLink>
        </div>

    )
}

export default SideNav
