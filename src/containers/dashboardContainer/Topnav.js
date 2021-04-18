import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Topnav.css'

function TopNav() {
    return (
        <div className="topnavbar">
            <ul>
                <li><i className="fa fa-search faicon"></i></li>
                <li><input className="navsearchbar" type="text" placeholder="Search leads"></input></li>
                <li className="profile"><NavLink style={{ float: "right" }} to="#"><i className="fa fa-bell" style={{fontSize:"30px"}}></i></NavLink></li>
                <li ><NavLink style={{ float: "right" }} to="#"><i className="fa fa-user" style={{fontSize:"35px", paddingBottom:"10px"}}></i></NavLink></li>
            </ul>
        </div>
    )
}
export default TopNav