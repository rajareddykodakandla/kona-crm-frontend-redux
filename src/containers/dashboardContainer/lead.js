import React, { useEffect } from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removelead, getlead } from '../../actions/leads'
import '../../styles/lead.css'
import Activities from '../dashboardContainer/activities'
import Notes from '../dashboardContainer/notes'
import Tasks from '../dashboardContainer/tasks'
import Checklist from '../dashboardContainer/checklist'
import Email from '../dashboardContainer/email'

export default function Lead(props) {
    const dispatch = useDispatch();
    const lead = useSelector(appState => appState.leads)
    const isUserLoggedIn = useSelector(appState => appState.isUserLoggedIn)
    const id = props.location.pathname.split("/")[2]

    useEffect(() => {
        if (!isUserLoggedIn) {
            props.history.push("/login")
        }
    })

    useEffect(() => {
        dispatch(getlead(id));
    }, [lead])

    const removeLead = (event) => {
        event.preventDefault();
        dispatch(removelead(id));
        if (lead) {
            props.history.push("/leads")
        }
    }

    const editLead = (event) => {
        event.preventDefault();
        props.history.push(`/editlead/${id}`)
    }

    return (
        <React.Fragment>
            <Router>
                <div className="dashboard">
                    <div className="leadcontent">
                        <div><h2>{lead.name}  <i className="fa fa-trash" onClick={removeLead}></i>   <i className="fa fa-pencil" onClick={editLead}></i></h2></div>
                        <div className="wrapper">
                            <h4 className="first"><h3>Email: </h3>{lead.email}</h4>
                            <h4 className="second"><h3>Phone: </h3>{lead.phone}</h4>
                        </div>
                        <div className="wrapper">
                            <h4 className="first"><h3>Technology: </h3>{lead.technology}</h4>
                            <h4 className="second"><h3>Source: </h3>{lead.source}</h4>
                        </div>
                        <h4><h3>LeadOwner: </h3>{lead.leadOwner}</h4>
                        <div>
                            <h1><Link to={`/activities/${lead._id}`}>ACTIVIES</Link></h1>
                            <h1><Link to={`/notes/${lead._id}`}>NOTES</Link></h1>
                            <h1><Link to={`/tasks/${lead._id}`}>TASKS</Link></h1>
                            <h1><Link to={`/checklist/${lead._id}`}>CHECK LIST</Link></h1>
                            <h1><Link to={`/email/${lead._id}`}>EMAIL</Link></h1>
                        </div>
                        <div>
                            <Route exact path={`/activities/${lead._id}`}>
                                <Activities />
                            </Route>
                            <Route exact path={`/notes/${lead._id}`}>
                                <Notes />
                            </Route>
                            <Route exact path={`/tasks/${lead._id}`}>
                                <Tasks />
                            </Route>
                            <Route exact path={`/checklist/${lead._id}`}>
                                <Checklist />
                            </Route>
                            <Route exact path={`/email/${lead._id}`}>
                                <Email />
                            </Route>
                        </div>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    )
}

