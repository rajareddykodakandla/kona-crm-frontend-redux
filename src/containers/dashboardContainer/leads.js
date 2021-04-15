import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLeads } from '../../actions/leads'
import '../../styles/leads.css'
import Createlead from './createlead'
import Lead from './lead'

export const Leads = (props) => {
    const dispatch = useDispatch()
    const allleads = useSelector(appState => appState.leads)
    const leadcreated = useSelector(appState => appState.leadCreated)
    const [state, setState] = useState({
        "listleads": true,
        "showlead": false,
        "showcreatelead":false,
        "lead": {}
    })

    useEffect(() => {
        if(leadcreated === true){
            setState(previousState => ({
                ...previousState, "showlead": false, "listleads": true, "showcreatelead":false
            }))
        }
    }, [leadcreated])
    
    useEffect(() => {
        let token = sessionStorage.getItem("token")
        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }
        dispatch(getAllLeads(header));
    }, [state])
    
    const rendertable = () => {
        if (allleads.length > 0) {
            let leads = allleads.map(lead => {
                return <tr key={lead._id} onClick={() => { setState(previousState => ({ ...previousState, "lead": lead, "showlead": true, "listleads": false })); console.log(state.lead) }}><td>{lead.name}</td><td>{lead.phone}</td><td>{lead.email}</td><td>{lead.technology}</td><td>{lead.source}</td></tr>
            })
            return leads
        }
    }

    const backtoleads = () => {
        setState(previousState => ({
            ...previousState, "showlead": false, "listleads": true, "showcreatelead":false
        }))
    }

    const createlead = () =>{
        setState(previousState => ({
            ...previousState, "showlead":false, "listleads":false, "showcreatelead":true
        }))
    }

    return (
        <React.Fragment>
            {state.showlead ? <div className="row">
                <div className="leadbtn">
                    <button className="column btn btn-danger" onClick={backtoleads}>back</button>
                </div>
                <Lead className="column" leadinfo={state.lead}></Lead>
            </div> : null}

            {state.showcreatelead ? <Createlead history={props.history}></Createlead> : null}

            {state.listleads ? <div>
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
                
            </div>: null}
        </React.Fragment>
    )
}

export default Leads