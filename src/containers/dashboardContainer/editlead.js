import React, {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {editlead, getlead} from '../../actions/leads' 

function Editlead(props){
    const dispatch = useDispatch()
    const {register, handleSubmit, formState:{ errors }} = useForm()
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

    const onSubmit = (data) => {
        data._id = lead._id;
        console.log(data)
        dispatch(editlead(data));
        if(lead){
            props.history.push(`/lead/${lead._id}`)
        }
    }
    return(
        <React.Fragment>
                <div className="container">
                    <div className="card createleadcontent">
                        <div className="signin"><h3>EDIT LEAD</h3></div>
                        <div className="card-body">
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="email">Name:</label>
                                    <input type="text" className="form-control" name="name" defaultValue={lead.name} placeholder="Enter email" id="name" {...register('name', { required: { value: true, message: "name is required" } })} />
                                    {errors.name && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.name.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" name="email" defaultValue={lead.email} placeholder="Enter email" id="email" {...register('email', { required: { value: true, message: "Email is required" }, pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Invalid email format' } })} />
                                    {errors.email && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.email.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Mobile:</label>
                                    <input type="text" className="form-control" name="phone" defaultValue={lead.phone} placeholder="Enter mobile number" id="mobile" {...register('phone', { required: { value: true, message: "mobile number is required" }, minLength: { value: 10, message: "Invalid mobile number" }, maxLength: { value: 10, message: "Invalid mobile number" } })} />
                                    {errors.phone && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.phone.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Technology:</label>
                                    <input type="text" className="form-control" name="technology" defaultValue={lead.technology} placeholder="Enter Technology" id="technology" {...register('technology', { required: { value: true, message: "Technology is required" } })} />
                                    {errors.technology && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.technology.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Source:</label>
                                    <input type="text" className="form-control" name="source" defaultValue={lead.source} placeholder="Enter source" id="source" {...register('source', { required: { value: true, message: "source required" } })} />
                                    {errors.source && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.source.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd">Leadowner:</label>
                                    <input type="email" className="form-control" name="leadOwner" defaultValue={lead.leadOwner} placeholder="Enter leadowner" id="pwd" {...register('leadOwner', { required: { value: true, message: "leadowner is required" } })} />
                                    {errors.leadOwner && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.leadOwner.message}</p>)}
                                </div>
                                <div className="createleadbutton" >
                                    <button style={{ width: 200 + 'px' }} type="submit" className="btn btn-danger">EDIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default Editlead