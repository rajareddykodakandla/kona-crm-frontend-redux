// import React from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import {useForm} from 'react-hook-form'
// import '../../styles/Login.css'

// const Createlead = () => {
//     return (
//         <div>
//             <React.Fragment>
//                 <div className="container">
//                     <div className="title">
//                         <h1 className="text-center text-white pt-5" > <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h1>
//                     </div>
//                     <div className="card content">
//                         <div className="signin"><h3>SIGN IN</h3></div>
//                         <div className="card-body">
//                             <form className="form" onSubmit={handleSubmit(onSubmit)}>
//                                 <div className="form-group">
//                                     <label htmlFor="email">Email:</label>
//                                     <input type="email" className="form-control" name="email" placeholder="Enter email" id="email" {...register('email', { required: { value: true, message: "Email is required" }, pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Invalid email format' } })} />
//                                     {errors.email && errors.email.type === "required" && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.email.message}</p>)}
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="pwd">Password:</label>
//                                     <input type="password" className="form-control" name="password" placeholder="Enter password" id="pwd" {...register('password', { required: { value: true, message: "Password is required" } })} />
//                                     {errors.password && errors.password.type === "required" && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.password.message}</p>)}
//                                 </div>
//                                 <div className="button" >
//                                     <h5><a href="#" className="forgot">forgot password</a></h5>
//                                     <button style={{ width: 200 + 'px' }} type="submit" className="btn btn-danger">SIGN IN</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         </div>
//         )
// }

// export default Createlead
