import React from 'react'
import * as Types from '../constraints/ResetReduxCST'
export const actSortShopForAdmin = (sortNumber) => {
    return {
        type: "SORT_SHOP_FOR_ADMIN",
        sortNumber
    }
}