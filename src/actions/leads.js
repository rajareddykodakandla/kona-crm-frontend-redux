import axios from 'axios'
const URL = "http://localhost:8080/v1/leads/"

export const getAllLeads = (header) => {
    return async function(dispatch){
        try{
            let response = await axios.get(`${URL}allleads`, header)
            dispatch({
                type: "ALLLEADS",
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

export const getlead = (id) => {
    return async function(dispatch){
        try{
            let token = sessionStorage.getItem("token")
            const header = {
                headers: { 'Authorization': `Bearer ${token}` }
            }
            let response = await axios.get(`${URL}lead/${id}`, header);
            dispatch({
                type:"LEAD",
                payload:response
            })
        } catch(err){
            dispatch({
                type:"FAILURE",
                payload: err
            })
        }
    }
}

export const createlead = (data) => {
    return async function(dispatch){
        try{
            let token = sessionStorage.getItem("token")
            const header = {
                headers: { 'Authorization': `Bearer ${token}` }
            }
            let response = await axios.post(`${URL}createlead`, data, header);
            console.log(response);
            dispatch({
                type:"CREATE_LEAD",
                payload:response
            })
        } catch(err){
            dispatch({
                type:"FAILURE",
                payload: err
            })
        }
    }
}

export const removelead = (id) => {
    return async function(dispatch){
        try{
            let token = sessionStorage.getItem("token")
            const header = {
                headers: { 'Authorization': `Bearer ${token}` }
            }
            let response = await axios.delete(`${URL}removelead/${id}`, header);
            dispatch({
                type:"REMOVE_LEAD",
                payload:response
            })
        } catch(err){
            dispatch({
                type:"FAILURE",
                payload: err
            })
        }
    }
}

export const editlead = (lead) => {
    return async function(dispatch){
        try{
            let token = sessionStorage.getItem("token")
            const header = {
                headers: { 'Authorization': `Bearer ${token}` }
            }
            console.log("This is from lead action",lead)
            let response = await axios.put(`${URL}editlead`, lead, header);
            console.log(response);
            dispatch({
                type:"EDIT_LEAD",
                payload:response
            })
        } catch(err){
            dispatch({
                type:"FAILURE",
                payload: err
            })
        }
    }
}