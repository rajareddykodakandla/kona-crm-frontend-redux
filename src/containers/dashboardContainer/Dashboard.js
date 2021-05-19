import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAllLeads } from '../../actions/leads'
import "../../styles/Dashboard.css"
import CanvasJSReact from '../../assets/canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Dashboard(props) {

    const options = {
        fontColor: "white",
        backgroundColor: "#252C48",
        title: {
            fontColor: "white",
            text: "Total leads"
        },
        data: [{
            type: "pie",
            dataPoints: [
                { y: 32, label: "google ads", indexLabelFontColor: "white" },
                { y: 22, label: "Inbound", indexLabelFontColor: "white" },
                { y: 15, label: "Urbanpro", indexLabelFontColor: "white" },
                { y: 19, label: "Sulekha", indexLabelFontColor: "white" },
            ]
        }]
    }

    const dispatch = useDispatch()
    const isUserLoggedIn = useSelector(appState => appState.isUserLoggedIn);
    const leads = useSelector(appState => appState.leads);
    console.log(leads);
    useEffect(() => {
        if (!isUserLoggedIn) {
            props.history.push("/login");
        } else {
            let token = sessionStorage.getItem("token")
            const header = {
                headers: { 'Authorization': `Bearer ${token}` }
            }
            dispatch(getAllLeads(header));
        }
    }, [])

    return (
        <div className="dashboard">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Dashboard</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <div>
                            <h1>{leads.length}</h1>
                            <p>Total Leads</p>
                        </div>
                        <div>
                            <h1>{leads.length}</h1>
                            <p>Total Cold Leads</p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="border border-success" style={{ height: '300px' }}>
                            <CanvasJSChart options={options} />
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="border border-success" style={{ height: '300px' }}>
                            <h1>Leads by Sources</h1>
                        </div>
                    </div>
                </div>
            </div>
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