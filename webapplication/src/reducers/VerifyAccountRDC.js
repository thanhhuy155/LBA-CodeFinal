import * as Types from '../constraints/RegisterCST'

var initialState = null; 

export const handleVerifyAccount = (state= initialState,action)=>{
    switch (action.type)
    {
        case Types.VERIFY_ACCOUNT:
            return action.data;
        default: return state;
    }
}