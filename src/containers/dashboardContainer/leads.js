import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLeads } from '../../actions/leads'
import '../../styles/leads.css'

const Leads = (props) => {
    const dispatch = useDispatch()
    const allleads = useSelector(appState => appState.leads)
    const isUserLoggedIn = useSelector(appState => appState.isUserLoggedIn)

    useEffect(() => {
        if (isUserLoggedIn) {
            let token = sessionStorage.getItem("token")
            const header = {
                headers: { 'Authorization': `Bearer ${token}` }
            }
            dispatch(getAllLeads(header));
        } else {
            props.history.push("/login");
        }
    }, [allleads])

    const rendertable = () => {
        if (allleads.length > 0) {
            let leads = allleads.map(lead => {
                return <tr key={lead._id} onClick={() => { props.history.push(`/lead/${lead._id}`) }}><td>{lead.name}</td><td>{lead.phone}</td><td>{lead.email}</td><td>{lead.technology}</td><td>{lead.source}</td></tr>
            })
            return leads
        }
    }

    const createlead = () => {
        props.history.push('/createlead')
    }

    return (
        <React.Fragment>
            <div className="dashboard">
                <div className="tablecontent">
                    <div className="leadbtn">
                        <button className="btn btn-danger" onClick={createlead} >Create lead</button>
                    </div>
                    <div className="table-responsive">
                        <table className="table leadstable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Mobile Number</th>
                                    <th>Email</th>
                                    <th>Technology</th>
                                    <th>Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rendertable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Leads