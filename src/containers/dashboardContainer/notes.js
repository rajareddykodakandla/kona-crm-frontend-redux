import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Notes(props) {
    const lead = useSelector(appState => appState.leads)


    useEffect(() => {
        console.log(lead);
    }, []);

    return (
        <React.Fragment>
            <div>
                <h1>this is lead id {lead.notes.map(note => {
                    return <h2>{note.note}</h2>
                })}</h1>
            </div>
        </React.Fragment>
    )
}