import * as Types from '../constraints/ForgotPasswordCST'

var initialStateForEnterCurrentEmail = null; 

export const handleEnterCurrentEmail = (state= initialStateForEnterCurrentEmail,action)=>{
    switch (action.type)
    {
        case Types.ENTER_CURENT_EMAIL:
            return action.data
        default:
            return state
    }
}

var initialStateForEnterVerifiedPassword = null; 

export const handleEnterVerifiedPassword = (state= initialStateForEnterVerifiedPassword,action)=>{
    switch (action.type)
    {
        case Types.VERIFY_CODE:
            return action.data
        default:
            return state
    }
}

var initialStateForEnterNewPassword = null; 

export const handleEnterNewPassword = (state= initialStateForEnterNewPassword,action)=>{
    switch (action.type)
    {
        case Types.ENTER_NEW_PASSWORD:
            return action.data
        default:
            return state
    }
}