import * as Types from '../constraints/ModalChangeInformationCST'

export const actSwitchChangeInformationModal = () => {
    return {
        type: Types.SWITCH_OF_CHANGE_INFORMATION_MODAL,
    }
}

export const actTranferParameterForChangeInformationModal = (parameters) =>{
    return {
        type : Types.TRANSGER_PARAMETERS_FOR_CHANGE_INFORMATION_MODAL,
        parameters
    }
}