import * as Types from '../constraints/RegisterCST'

var initialState = null; 

export const handleUpdateAccountInformationWhenRegistering = (state= initialState,action)=>{
    switch (action.type)
    {
        case Types.STORE_OWNER_REGISTER:
            return action.data;
        default: return state;
    }
}