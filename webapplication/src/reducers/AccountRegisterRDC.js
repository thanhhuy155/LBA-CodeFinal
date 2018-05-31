import * as Types from '../constraints/RegisterCST'

var initialState = null; 

export const handleAccountRegister = (state= initialState,action)=>{
    switch (action.type)
    {
        case Types.REGISTER_ACCOUNT:
            return action.data;
        default: return state;
    }
}