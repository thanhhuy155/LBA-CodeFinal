import * as Types from './../constraints/ActionTypes';
var initialState = 1;
//1 : All
//2: Active
//3: Close

export const handleSortShopForAdmin = (state = initialState, action) => {
 
    switch (action.type) {
        case "SORT_SHOP_FOR_ADMIN":
            return action.sortNumber;
        default:
            return state;
    }
}