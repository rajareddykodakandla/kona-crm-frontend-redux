import React from 'react'
import '../../styles/lead.css'

export default function Lead(props){
    console.log(props)
    return (
        <div className="leadcontent">
        <div ><h1>{props.leadinfo.name}</h1></div>
        <div ><h1>{props.leadinfo.phone}</h1></div>
        <div ><h1>{props.leadinfo.email}</h1></div>
        <div ><h1>{props.leadinfo.technology}</h1></div>
        </div>
    )
}