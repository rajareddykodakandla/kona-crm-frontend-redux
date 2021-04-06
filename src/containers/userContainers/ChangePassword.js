import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changePassword } from '../../actions/user'
import '../../styles/ChangePassword.css'

var confirmpassword = false
function ChangePassword(props) {
    console.log(props)
    useEffect(() => {
        if (!props.isUserLoggedIn) {
            props.history.push("/login")
        }
    })
    const [state, setState] = useState({
        "password": "",
        "confirmpass": ""
    })
    const passwordRef = React.createRef();
    const confirmpassRef = React.createRef();

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&_?"])(?=.*\d).{8,}$/;

    const captureData = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name == "password") {
            let passwordValidation = passwordPattern.test(value)
            //console.log(passwordValidation);
            if (value != "" && passwordValidation) {
                setState(previousState => ({
                    ...previousState, [name]: value
                }))
                passwordRef.current.innerHTML = ""
            } else {
                passwordRef.current.innerHTML = "password required"
            }
        }
        if (name == "confirmpass") {
            let passwordValidation = passwordPattern.test(value)
            if (value != "" && passwordValidation) {
                setState(previousState => ({
                    ...previousState, [name]: value
                }))
                confirmpassRef.current.innerHTML = ""
                confirmpassword = true
            } else {
                confirmpassword = true
                confirmpassRef.current.innerHTML = "Password does't matched"
            }
        }
    }

    const changepassword = (event) => {
        event.preventDefault();
        let token = sessionStorage.getItem("token")
        if (state.password == state.confirmpass) {
            confirmpassRef.current.innerHTML = ""
            const header = {
                headers: { 'Authorization': `Bearer ${token}` }
            }
            const body = {
                password: state.password
            }
            props.changePassword(body, header);
        } else {
            confirmpassRef.current.innerHTML = "Password does't matched"
        }

    }


    return (
        <React.Fragment>
            <div className="maint">
                <h1 className="text-center text-white pt-5 headcolor" > <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h1>
            </div>
            <div className="subdiv">
                <form className="formc">
                    <div className="form-group maindiv">
                        <input type="password" className="form-control" onChange={captureData} name="password" placeholder="Enter password" id="password"></input>
                        <p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} ref={passwordRef}></p>
                    </div>
                    <div className="form-group maindiv">
                        <input type="password" className="form-control" onChange={captureData} name="confirmpass" placeholder="Enter confrim password" id="confirmpassword"></input>
                        <p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} ref={confirmpassRef}></p>
                    </div>
                    <div className="Btn">
                        <button style={{ width: 200 + 'px', fontSize: 18 + 'px' }} type="submit" disabled={!(passwordPattern.test(state.password) && confirmpassword)} className="btn btn-danger" onClick={changepassword}>Change</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changePassword: changePassword }, dispatch)
}

const mapStateToProps = (appState) => {
    return { isUserLoggedIn: appState.isUserLoggedIn }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)
