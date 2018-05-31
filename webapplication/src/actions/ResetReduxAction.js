import React from 'react'
import * as Types from '../constraints/ResetReduxCST'
export const actResetReduxForShopDetail = () => {
    return {
        type: Types.RESET_REDUX_FOR_SHOP_DETAIL
    }
}

export const actResetReduxForRaitingCustomer = () =>{
    return {
        type: Types.RESET_REDUX_FOR_RATING
    }
}