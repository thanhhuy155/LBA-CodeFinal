import * as Types from '../constraints/EventManangement'
import callAPI, { callAPIForFormData } from '../utils/apiCaller'
import SelectShopPostion from '../constraints/SelectShopPosition'
import * as TypesOfResetRedux from '../constraints/ResetReduxCST'
import {handleCheckToday} from '../constraints/HandleDate'
import Notifications, {notify} from 'react-notify-toast';
var findIndex = (events, eventID) => {
    var result = -1;
    events.forEach((eventItem, index) => {
        if (eventItem.Promotion_ID === eventID) {
            result = index;
        }
    });
    return result;
}

var initialStateEventStaristic = null

export const handleGetEventStaristic = (state = initialStateEventStaristic, action) => {
    switch (action.type) {
        case Types.GET_EVENT_STARISTIC:
            var dataFromAction = action.data
            if (dataFromAction.message.success)
            {
                return dataFromAction.data
            }
            else {
                notify.show (dataFromAction.message.error,'error',2500,'')
                return state
            }
        case TypesOfResetRedux.RESET_REDUX_FOR_SHOP_DETAIL:
            return null
        case Types.CREATE_EVENT_FOR_SHOP:
            var dataFromActionCreateEvent =  action.data
            if (action.data.message.success)
                {
                    state.numberOfPromoton++
                    let StatusEvent = handleCheckToday (dataFromActionCreateEvent.data.Promotion_DateStart, dataFromActionCreateEvent.data.Promotion_DateEnd)
                    if (StatusEvent ===0)
                        state.numberOfProgressingPromoton++
                    else 
                        state.numberOfFuturePromoton++
                    return {...state, state}
                }
        case Types.DELETE_EVENT:
            if (action.data.message.success)
                {
                    state.numberOfPromoton--
                    let StatusEvent = handleCheckToday (action.StartDate, action.CloseDate)
                    if (StatusEvent ===0)
                        state.numberOfProgressingPromoton--
                    else 
                        state.numberOfFuturePromoton--
                    return {...state,state}
                }
        case Types.CHANGE_INFORMATION_EVENT:
            var dataFromActionChangingEvent =  action.data
            if (dataFromActionChangingEvent.message.success)
                {
                    let oldStatusEvent = handleCheckToday (action.oldStartDate, action.oldEndDate)
                    let newStatusEvent = handleCheckToday (dataFromActionChangingEvent.data.Promotion_DateStart,dataFromActionChangingEvent.data.Promotion_DateEnd )
                    if (oldStatusEvent === newStatusEvent)
                    {

                    }
                    else {
                        if (newStatusEvent ===0){
                            state.numberOfProgressingPromoton++
                            state.numberOfFuturePromoton--
                        }
                        else {
                            state.numberOfFuturePromoton++
                            state.numberOfProgressingPromoton--
                        }
                    }
                    return {...state,state}
                }
        default:   
            return state;
    }
}

var initialStateEventsList = null;

export const handleGetEventsList = (state = initialStateEventsList, action) => {
    switch (action.type) {
        case Types.GET_EVENT_LIST:
            var dataFromAction = action.data
            if (dataFromAction.message.success)
            {
                return dataFromAction.data.promotionsByIDStoreViewModel
            }
            else{
                notify.show (dataFromAction.message.error,'error',2500,'')
                return state
            }
        case Types.DELETE_EVENT:
            if (action.data.message.success)
            {
                notify.show ('You have just delete promotion successfully!','success',2500,'')
                var updateArray = state.filter ((item) => item.Promotion_ID !== action.idDeletedShop)
                return updateArray
            }
            else
            {
                notify.show (action.data.message.error,'error',2500,'')
                return state
            }
            return updateArray
        case Types.CREATE_EVENT_FOR_SHOP:
                var dataFromActionCreateEvent =  action.data
                if (action.data.message.success)
                    {
                        notify.show ('You have just created a promotion successfully!','success',2500,'')
                        var varcreatedItem = dataFromActionCreateEvent.data
                        state.push (varcreatedItem)
                        return [...state]
                    }
                else
                {
                    notify.show (action.data.message.error,'error',2500,'')
                    return state
                }
        case Types.CHANGE_INFORMATION_EVENT :
            var dataFromActionChangeEvent = action.data
            if (dataFromActionChangeEvent.message.success)
            {
                var idOfChangedEvent = dataFromActionChangeEvent.data.Promotion_ID
                var eventIndex = findIndex (state,idOfChangedEvent)
                if (eventIndex !== -1){
                    state[eventIndex] = dataFromActionChangeEvent.data
                    notify.show ('Change information of promotion successfully','success',2500,'')
                    return [...state]
                } 
                else {
                    notify.show ('Something was wrong with changing promotion','success',2500,'')
                    return [...state]
                }
            }
            else {
                notify.show (dataFromActionChangeEvent.message.error,'success',2500,'')
                return [...state]
            }
        case TypesOfResetRedux.RESET_REDUX_FOR_SHOP_DETAIL:
            return null
        default: 
            return state;
    }
}

var initialCustomerCommentForEvent = []

export const handleGetCustomerCommentForEvent = (state = initialCustomerCommentForEvent, action) => {
    switch (action.type) {
        case Types.GET_CUSTOMER_COMMENT_FOR_EVENT:
            var dataFromAction = action.data
            if (dataFromAction.message.success)
            { 
                return dataFromAction.data
            }
            else {
                console.log (dataFromAction.message.error)
                return state
            }
        default: 
            return state;
    }
}