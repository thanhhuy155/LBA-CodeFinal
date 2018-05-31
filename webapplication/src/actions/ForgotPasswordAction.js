import * as Types from '../constraints/ForgotPasswordCST'
import callAPI from '../utils/apiCaller'
export const actEnterCurrentEmail = (data) => {
    return {
        type: Types.ENTER_CURENT_EMAIL,
        data
    }
}

export const actHandleEnterCurrentEmail = (email) =>{
    return (dispatch) =>{
        return callAPI ('ForgotPassword', 'POST',{
            Username: email,
        }).then (async res=>{
            await localStorage.setItem ('CurrentEmail',email)
            await dispatch (actEnterCurrentEmail (res))
            
        } )
    }
}

export const actEnterVerifiedCode = (data) => {
    return {
        type: Types.VERIFY_CODE,
        data
    }
}

export const actHandleEnterVerifiedCode = (verifiedCode) =>{
    return (dispatch) =>{
        return callAPI ('VerifyForgotPassword', 'POST',{
            Username: localStorage.getItem ('CurrentEmail'),
            Account_ForgotPasswordCode: verifiedCode
        }).then (async res=>{
            await dispatch (actEnterVerifiedCode (res))
        } )
    }
}

export const actEnterNewPassword = (data) => {
    return {
        type: Types.ENTER_NEW_PASSWORD,
        data
    }
}

export const actHandleEnterNewPassword = (newPassword) =>{
    return (dispatch) =>{
        return callAPI ('AccountChangePassword', 'POST',{
            Username: localStorage.getItem ('CurrentEmail'),
            Password: newPassword
        }).then (async res=>{
            await dispatch (actEnterNewPassword (res))
        } )
    }
}
