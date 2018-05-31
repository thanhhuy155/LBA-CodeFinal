import * as Types from '../constraints/MainCST'

var initialState_TokenSwitch = false

export const handleSwitchWattingToken =  (state= initialState_TokenSwitch,action)=>{
    switch (action.type)
    {
        case Types.SWITCH_WAITTING_MODAL:
            return !state;
        default: return state;
    }
}