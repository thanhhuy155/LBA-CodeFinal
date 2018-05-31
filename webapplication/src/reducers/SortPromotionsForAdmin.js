import * as Types from './../constraints/ActionTypes';
var initialState = 1;
//1 : All
//2: Operating
//3: Closed
//4: Future

export const handleSortPromotionsForAdmin = (state = initialState, action) => {

    switch (action.type) {
        case "SORT_PROMOTIONS_FOR_ADMIN":
            return action.sortNumber;
        default:
            return state;
    }
}