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
