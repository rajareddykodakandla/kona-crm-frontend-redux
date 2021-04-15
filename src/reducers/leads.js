export default function(state = [] || null, action){
    switch(action.type){
        case "ALLLEADS":
            if(action.payload.data){
               return state = action.payload.data
            } else{
                return state
            }
        case "CREATE_LEAD":
            if(action.payload.data){
                return true
            } else {
                return false
            }
        case "REMOVE_LEAD":
            if(action.payload.data){
                return true
            } else {
                return false
            }    
        case "EDIT_LEAD":
            if(action.payload.data){
                return true
            } else {
                return false
            }
        case "FAILURE":
            return state    
    }
    return state
}