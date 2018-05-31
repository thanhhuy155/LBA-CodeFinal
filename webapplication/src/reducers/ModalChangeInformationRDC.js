import * as Types from '../constraints/ModalChangeInformationCST'

export const handleSwitchChangeInformationModal = (state = false,action)=>{
    switch (action.type)
    {
        case Types.SWITCH_OF_CHANGE_INFORMATION_MODAL:
            return !state;
        default: return state;
    }
}

export const handleTransferParametersForChangeInformationModal = (state = null, action) =>{
    switch (action.type)
    {
        case Types.TRANSGER_PARAMETERS_FOR_CHANGE_INFORMATION_MODAL:
            return action.parameters;
        default: return state;
    }
}