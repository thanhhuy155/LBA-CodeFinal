import * as Types from './../constraints/ActionTypes';
var initialState = [];
var findIndex = (shops, Store_ID) => {
    var result = -1;
    shops.forEach((shops, index) => {
        if (shops.Store_ID === Store_ID) {
            result = index;
        }
    });
    return result;
}
const shops = (state = initialState, action) => {
    var index = -1;
    var { Store_ID } = action;
    switch (action.type) {
        case Types.FETCH_SHOP:
            return action.shops;
        case Types.XOA_STORE:
            index = findIndex(state, Store_ID);
            state.splice(index, 1);
            return [...state];
        default:
            return [...state];
    }
}
export default shops;