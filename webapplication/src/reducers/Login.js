import * as Types from '../constraints/LoginCST'

var initialState = null;

export const handleLogin =  (state= initialState,action)=>{
    switch (action.type)
    {
        case Types.Handle_Token:
            return state;
        case Types.Handle_Login_Without_Token:
            return  action.dataUser;
        case Types.HANDLE_LOGOUT:
            localStorage.removeItem ('User')
            window.location.replace("/")
            return null
        default: return null;
    }
}