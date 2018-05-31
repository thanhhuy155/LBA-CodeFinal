import * as Types from '../constraints/ModalEventDetailCST'
export const actSwitchEventModal = () => {
    return {
        type: Types.SWITCH_MODAL_EVENT_DETAIL
    }
}

export const actGetDataForModalEventDetail = (eventItem) =>{
    return {
        type: Types.SEND_DATA_EVENT_DETAIL,
        eventItem
    }
}