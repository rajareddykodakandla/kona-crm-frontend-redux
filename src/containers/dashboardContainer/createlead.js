import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import {createlead} from '../../actions/leads'
import '../../styles/createlead.css'

function Createlead(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const leadcreated = useSelector(appState => appState.leadCreated);
    
    const onSubmit = (data) => {
        console.log(data);
        dispatch(createlead(data));
    }

     return (
        <div>
            <React.Fragment>
                <div className="container">
                    <div className="card createleadcontent">
                        <div className="signin"><h3>CREATE LEAD</h3></div>
                        <div className="card-body">
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="email">Name:</label>
                                    <input type="text" className="form-control" name="name" placeholder="Enter email" id="name" {...register('name', { required: { value: true, message: "name is required" } })} />
                                    {errors.name && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.name.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" name="email" placeholder="Enter email" id="email" {...register('email', { required: { value: true, message: "Email is required" }, pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Invalid email format' } })} />
                                    {errors.email && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.email.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Mobile:</label>
                                    <input type="text" className="form-control" name="phone" placeholder="Enter mobile number" id="mobile" {...register('phone', { required: { value: true, message: "mobile number is required" }, minLength: { value: 10, message: "Invalid mobile number" }, maxLength: { value: 10, message: "Invalid mobile number" } })} />
                                    {errors.phone && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.phone.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Technology:</label>
                                    <input type="text" className="form-control" name="technology" placeholder="Enter Technology" id="technology" {...register('technology', { required: { value: true, message: "Technology is required" } })} />
                                    {errors.technology && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.technology.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Source:</label>
                                    <input type="text" className="form-control" name="source" placeholder="Enter source" id="source" {...register('source', { required: { value: true, message: "source required" } })} />
                                    {errors.source && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.source.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd">Leadowner:</label>
                                    <input type="email" className="form-control" name="leadOwner" placeholder="Enter leadowner" id="pwd" {...register('leadOwner', { required: { value: true, message: "leadowner is required" } })} />
                                    {errors.leadOwner && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.leadOwner.message}</p>)}
                                </div>
                                <div className="createleadbutton" >
                                    <button style={{ width: 200 + 'px' }} type="submit" className="btn btn-danger">CREATE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
     )
}

export default Createlead
