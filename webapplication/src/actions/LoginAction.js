import * as Types from '../constraints/LoginCST'
import callAPI from '../utils/apiCaller'
export const actRegisterProgress = (numberProgress) => {
    return {
        type: Types.Register_PROGRESS,
        numberProgress
    }
}

export const actForgetPassword = (numberProgress) => {
    return {
        type: Types.FORGET_PASSWORD_PROGRESS,
        numberProgress
    }
}

export const actSaveUser =  ( dataUser ) => {
    return  {
        type: Types.Handle_Login_Without_Token,
        dataUser
    }
}

export const actHandleLogout = () =>{
    return{
        type: Types.HANDLE_LOGOUT
    }
}

export const actHandleLoginRequest = (email, password) => {
    return (dispatch) => {
        return callAPI('Login', 'POST', {
            Username: email,
            Password: password
        }).then(async res => {
            if (res)
            {
                if (res.message.success)
                {
                    await localStorage.setItem('User', JSON.stringify(res));
                }
            }
            await dispatch(actSaveUser(res))
        })
    }
}

export const actHandleTokeRequest = () => {
    return (dispatch) => {
        return callAPI('Token', 'POST',null).then(async res => {
            if (res.message.success)
                {
                    await dispatch(actSaveUser(res))
                }
            else {

            }
        })
    }
}