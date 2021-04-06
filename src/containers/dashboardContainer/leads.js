import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLeads } from '../../actions/leads'
import '../../styles/leads.css'
import Lead from './lead'

export const Leads = (props) => {
    const dispatch = useDispatch()
    const allleads = useSelector(appState => appState.leads)
    const [state, setState] = useState({
        "listleads": true,
        "showlead": false,
        "lead": {}
    })

    useEffect(() => {
        let token = sessionStorage.getItem("token")
        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }
        dispatch(getAllLeads(header));
    }, [])

    const rendertable = () => {
        if (allleads.length > 0) {
            let leads = allleads.map(lead => {
                return <tr key={lead._id} onClick={() => { setState(previousState => ({ ...previousState, "lead": lead, "showlead": true, "listleads": false })); console.log(state.lead) }}><td>{lead.name}</td><td>{lead.phone}</td><td>{lead.email}</td><td>{lead.technology}</td><td>{lead.source}</td></tr>
            })
            return leads
        }
    }

    const button = () => {
        setState(previousState => ({
            ...previousState, "showlead": false, "listleads": true
        }))
    }
    return (
        <div>

            {/*state.showlead ? <div className="leadbtn">
                    <button className="column btn btn-danger" onClick={button}>back</button>
    </div> : null*/}
            {state.showlead ? <div className="row">
                <div className="leadbtn">
                    <button className="column btn btn-danger" onClick={button}>back</button>
                </div>
                <Lead className="column" leadinfo={state.lead}> 
                </Lead>
            </div> : null}

            {state.listleads ? <div className="tablecontent">
                <div className="table-responsive">
                    <table className="table">
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
            </div> : null}
        </div>
    )
}


export default Leads
