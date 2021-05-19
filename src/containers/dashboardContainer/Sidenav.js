import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../styles/sidenav.css"

function SideNav() {
    return (
        <div className="sidenav px-3 pt-10 pl-2">
            <h2 className="header" > <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h2><br></br><br></br>
            <NavLink to="/dashboard"><i className="fa fa-tachometer"></i>&nbsp;Dashboard</NavLink>
            <NavLink to="/leads"><i className="fa fa-users"></i>&nbsp;Leads</NavLink>
            <NavLink to="#"><i className="fa fa-pie-chart"></i>&nbsp;Reports</NavLink>
            <NavLink to="#"><i className="fa fa-sliders"></i>&nbsp;Settings</NavLink>
        </div>

    )
}

export default SideNav
