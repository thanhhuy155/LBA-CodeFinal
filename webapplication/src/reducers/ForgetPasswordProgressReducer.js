import * as Types from '../constraints/LoginCST'

var initialState = -1; 
//-1 Enter Email
//0 Enter Varification Code
//1 Edit Password
export const handleForgetPasswordProgress = (state= initialState,action)=>{
    switch (action.type)
    {
        case Types.FORGET_PASSWORD_PROGRESS:
            return action.numberProgress
        default:
            return state
    }
}