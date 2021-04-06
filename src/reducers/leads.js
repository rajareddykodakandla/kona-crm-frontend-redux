export default function(state = [], action){
    switch(action.type){
        case "ALLLEADS":
            if(action.payload.data){
               return state = action.payload.data
            } else{
                return state
            }
        case "FAILURE":
            return state    
    }
    return state
}