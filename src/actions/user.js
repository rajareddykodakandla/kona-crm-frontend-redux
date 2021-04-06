import axios from 'axios'
const URL = "http://localhost:8080/v1/user/"

 export const registerNewUser = (user) => {
     return async function(dispatch){
         try{
             let response = await axios.post(`${URL}register`, user);
             dispatch({
                 type:"REGISTER",
                 payload:response
             })
         } catch(err){
             dispatch({
                 type:"FAILURE",
                 payload:err
             })
         }
     }
}


export const loginAction = (data) => {
    return async function (dispatch) {
        let response = await axios.post(`${URL}login`, data)
        console.log("res", response)
        dispatch({
            type: "LOGIN",
            payload: response
        })
    }
}

 export const changePassword = (body, header) => {
    let promise = axios.post(`${URL}updatePassword`, body, header)
    return {
        type:'CHANGEPASSWORD',
        payload:promise
    }
}
