import * as Types from './../constraints/ActionTypes';
var initialState = [];
var findIndex = (promotions, Promotion_ID) => {
    var result = -1;
    promotions.forEach((promotions, index) => {
        if (promotions.Promotion_ID === Promotion_ID) {
            result = index;
        }
    });
    return result;
}
const promotions = (state = initialState, action) => {
    var index = -1;
    var { Promotion_ID } = action;
    switch (action.type) {
        case Types.FETCH_PROMOTION:
            return action.promotions;
        case Types.DELETE_PROMOTION:
            index = findIndex(state, Promotion_ID);
            state.splice(index, 1);
            return [...state];
        default:
            return state;
    }
}
export default promotions;
