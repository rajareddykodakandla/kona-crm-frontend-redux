export default function (state = null, action) {
    switch (action.type) {
        case 'REGISTER':
            if (action.payload.data.token) {
                sessionStorage.setItem('token', action.payload.data.token);
                 return true;
            }
            else {
                return false;
            }

        case 'LOGIN':
            if (action.payload.data.token) {
                sessionStorage.setItem("token", action.payload.data.token);
                 return true;
            } else {
                return false;
            }

        case 'CHANGEPASSWORD':
            if(action.payload.data){
                sessionStorage.removeItem('token');
                return false;
            } else {
                return true;
            }

        case 'FAILURE':
            return null     
    }
    return state;
}