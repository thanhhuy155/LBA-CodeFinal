import * as Types from '../constraints/LoginCST'

var initialState = -1; 
//-1 is Send Email
//0 is Verificartion, 
//1 is Information,
//2 is Complete,

export const handleProgressBar = (state= initialState,action)=>{
    switch (action.type)
    {
        case Types.Register_PROGRESS:
            return action.numberProgress
        default:
            return state
    }
}