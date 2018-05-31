import * as Types from '../constraints/ModalEventDetailCST'

export const handleSwitchModalEventDetail = (state = false,action)=>{
    switch (action.type)
    {
        case Types.SWITCH_MODAL_EVENT_DETAIL:
            return !state;
        default: return state;
    }
}

export const handleGetDataForModalEventDetail = (state = null, action) =>{
    switch (action.type)
    {
        case Types.SEND_DATA_EVENT_DETAIL:
            return action.eventItem;
        default: return state;
    }
}