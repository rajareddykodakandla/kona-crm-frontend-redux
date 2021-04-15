import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { removelead, editlead } from '../../actions/leads'
import '../../styles/lead.css'

export default function Lead(props){
    const [state, setState] = useState({
        "lead":true,
        "showeditform":false
    })

    const dispatch = useDispatch();

    const removeLead = (event) => {
        event.preventDefault();
        dispatch(removelead(props.leadinfo._id));
    }

    const editLead = (event) => {
        event.preventDefault();
    }

    return (
        <React.Fragment>
        {state.lead ? <div className="leadcontent">
        <div ><h1>{props.leadinfo.name}<button onClick={removeLead}>Remove</button><button onClick={editLead}>Edit</button></h1></div>
        <div ><h1>{props.leadinfo.phone}</h1></div>
        <div ><h1>{props.leadinfo.email}</h1></div>
        <div ><h1>{props.leadinfo.technology}</h1></div>
        </div> : null}
        </React.Fragment>
    )
}