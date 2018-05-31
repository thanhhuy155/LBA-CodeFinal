import * as Types from '../constraints/PaymentManagementCST'

export const handleGetPaymentHistoryForShop = (state = [],action)=>{
    switch (action.type)
    {
        case Types.GET_PAYMENT_HISTORY_FOR_SHOP:
            var dataFromAction = action.data
            if (dataFromAction.message.success)
            {
                state = state.concat (dataFromAction.data) 
                return [state,...state]
            }
            else {
                console.log (dataFromAction.message.error)
                return state
            }
            return action;
        default: return state;
    }
}

export const handleGetPaymentHistoryForShopOwner = (state = [], action) =>{
    switch (action.type)
    {
        case Types.GET_PAYMENT_HISTORY_FOR_SHOP_OWNER:
            var dataFromAction = action.data
            if (dataFromAction.message.success)
            {
                state = state.concat (dataFromAction.data) 
                return [state,...state]
            }
            else {
                console.log (dataFromAction.message.error)
                return state
            }
            return action.eventItem;
        default: return state;
    }
}