import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removelead, getlead } from '../../actions/leads'
import '../../styles/lead.css'

export default function Lead(props) {
    const dispatch = useDispatch();
    const lead = useSelector(appState => appState.leads)
    const isUserLoggedIn = useSelector(appState => appState.isUserLoggedIn)
    const id = props.location.pathname.split("/")[2]
    useEffect(()=>{
        if(isUserLoggedIn){
        dispatch(getlead(id));
        } else {
            props.history.push("/login")
        }
    },[])

    const removeLead = (event) => {
        event.preventDefault();
        dispatch(removelead(id));
        if(lead){
            props.history.push("/leads")
        }
    }

    const editLead = (event) => {
        event.preventDefault();
        props.history.push(`/editlead/${id}`)
    }

    return (
        <React.Fragment>
            <div className="dashboard">
                <div className="leadcontent">
                    <div ><h1>{lead.name}<button onClick={removeLead}>Remove</button><button onClick={editLead}>Edit</button></h1></div>
                    <div ><h1>{lead.email}</h1></div>
                    <div ><h1>{lead.phone}</h1></div>
                    <div ><h1>{lead.technology}</h1></div>
                </div>
            </div>
        </React.Fragment>
    )
}