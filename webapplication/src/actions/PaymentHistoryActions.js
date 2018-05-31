import * as Types from '../constraints/PaymentManagementCST'
import callAPI from '../utils/apiCaller'
const actSaveResultFromGettingPaymentHistoryForShopOwner = (data) => {
    return {
        type: Types.GET_PAYMENT_HISTORY_FOR_SHOP_OWNER,
        data
    }
}

export const actGetPaymentHistoryForShopOwner = (idShopOwner) =>{
    return (dispatch) =>{
        return callAPI ('WA_GetPaymentsByIDOwner/' + idShopOwner, 'GET', null).then (res =>{
            dispatch (actSaveResultFromGettingPaymentHistoryForShopOwner (res))
        })
    }
}