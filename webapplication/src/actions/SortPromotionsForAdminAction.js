import React from 'react'
import * as Types from '../constraints/ResetReduxCST'
export const actSortPromotionsForAdmin = (sortNumber) => {
    return {
        type: "SORT_PROMOTIONS_FOR_ADMIN",
        sortNumber
    }
}