import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { registerNewUser } from '../../actions/user'
import '../../styles/Register.css'

function Register(props) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const isUserLoggedIn = useSelector(appState => appState.isUserLoggedIn)

    useEffect(() => {
        if (isUserLoggedIn) {
            props.history.push("/dashboard");
        }
    })

    const onSubmit = (data) => {
        dispatch(registerNewUser(data));
    }

    return (
        <div className="container">
            <div className="title">
                <h1 className="text-center text-white pt-5 headcolor" > <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h1>
            </div>
            <div className="card contentreg">
                <div className="signup"><h3>SIGN UP</h3></div>
                <div className="card-body">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="email">firstName:</label>
                            <input type="text" className="form-control" name="firstName" placeholder="Enter firstname" id="username" {...register('firstName', { require: { value: true, message: "firstname required" }, minLength: { value: 3, message: "Minimum 3 characters" } })}></input>
                            {errors.firstName && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.firstName.message}</p>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">lastName:</label>
                            <input type="text" className="form-control" name="lastName" placeholder="Enter lastname" id="email" {...register('lastName', { require: { value: true, message: "leastname required" }, minLength: { value: 3, message: "Minimum 3 characters" } })}></input>
                            {errors.lastName && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.lastName.message}</p>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Email:</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter email" id="pwd" {...register('email', { required: { value: true, message: "Email is required" }, pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Invalid email format' } })}></input>
                            {errors.email && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.email.message}</p>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" name="password" placeholder="Enter password" id="pwdcurrent" {...register('password', { required: { value: true, message: "Password is required" }, pattern: { value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&_?"])(?=.*\d).{8,}$/, message: "Password should contain minimum 8 characters, a special character and a number" } })}></input>
                            {errors.password && (<p style={{ color: 'red', fontSize: 13 + 'px', textAlign: "center" }} >{errors.password.message}</p>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Mobile:</label>
                            <input type="mobile" className="form-control" name="mobileNo" placeholder="Enter mobile number" id="mobile" {...register('mobileNo', { required: { value: true, message: "mobile number required" }, minLength: { value: 10, message: "Invalid mobile number" }, maxLength: { value: 10, message: "Invalid mobile number"} })}></input>
                            {errors.mobileNo && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.mobileNo.message}</p>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">City:</label>
                            <input type="text" className="form-control" name="city" placeholder="Enter city" id="city" {...register('city', { required: { value: true, message: "City required" } })}></input>
                            {errors.city && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.city.message}</p>)}
                        </div>
                        <div className="button" >
                            <button style={{ width: 200 + 'px' }} type="submit" className="btn btn-danger" >Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
