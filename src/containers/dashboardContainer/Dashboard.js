import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'

import "../../styles/Dashboard.css"
import ChangePassword from '../userContainers/ChangePassword'
import Leads from '../dashboardContainer/leads'

function Dashboard(props) {
    const isUserLoggedIn = useSelector(appState => appState.isUserLoggedIn);
    useEffect(() => {
        if (!isUserLoggedIn) {
            props.history.push("/login");
        }
    })
    const [state, setState] = useState({
        "dashboard": true,
        "changepassword": false,
        "leads": false
    })

    const showdashboard = (event) => {
        event.preventDefault();
        setState(previousState => ({...previousState, "changepassword": false, "dashboard": true, "leads": false }))
    }

    const changepass = (event) => {
        event.preventDefault();
        setState(previousState => ({ ...previousState, "changepassword": true, "dashboard": false, "leads": false }))
        console.log(state);
    }

    const showleads = (event) => {
        event.preventDefault();
        setState(previousState => ({...previousState, "changepassword": false, "dashboard": false, "leads": true }))
    }

    return (
        <div>
            <div id="mySidenav" className="sidenav">
                <h3 className="header" > <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h3>

                <div className="links">
                    <NavLink to="/dashboard" onClick={showdashboard} >Dashboard</NavLink>
                    <NavLink to="/dashboard" onClick={showleads}>Leads</NavLink>
                    <NavLink to="/dashboard">Report</NavLink>
                    <NavLink to="/dashboard">Settings</NavLink>

                    <NavLink to="/changepassword" onClick={changepass} >change password</NavLink>
                </div>

            </div>
            {state.dashboard ? <div className="dashboard" >
                <h1>Hello welcome to user Dashboard</h1>
            </div> : null}
            {state.changepassword ? <div className="dashboard">
                <ChangePassword history={props.history}></ChangePassword>
            </div> : null}
            {state.leads ? <div className="dashboard">
                <Leads history={props.history}></Leads>
            </div> : null }
            {/*this.state.dashboard ? <div className="dashboard" >
                <h1>Hello welcome to user Dashboard</h1>
            </div> : null}
            {this.state.changepassword ? <div>
                <ChangePassword props={this.props}></ChangePassword>
            </div> : null}
            {this.state.leads ? <div>
                <Leads history={this.props.history}></Leads>
            </div> : null*/}
        </div>
    )
}



export default Dashboard
 
/*
<div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h1>Dashboard</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2">
                    <div>
                        <h1>150</h1>
                        <p>Total Leads</p>
                    </div>
                    <div>
                        <h1>120</h1>
                        <p>Total Cold Leads</p>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="border border-success" style={{height: '300px'}}>
                        <h1>Leads by Courses</h1>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="border border-success"  style={{height: '300px'}}>
                        <h1>Leads by Sources</h1>
                    </div>
                </div>

*/