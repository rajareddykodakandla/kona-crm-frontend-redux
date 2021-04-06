export default function(state = [], action){
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
        case "FAILURE":
            return state    
    }
    return state
}