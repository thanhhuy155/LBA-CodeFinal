import * as Types from './../constraints/ActionTypes';
var initialState = [];
var findIndex = (shopowners, Owner_ID) => {
    var result = -1;
    shopowners.forEach((shopowners, index) => {
        if (shopowners.Owner_ID === Owner_ID) {
            result = index;
        }
    });
    return result;
}
const shopowners = (state = initialState, action) => {
    var index = -1;
    var { Owner_ID } = action;
    switch (action.type) {
        case Types.FETCH_SHOPOWNER:
            return action.shopowners;
        case Types.DELETE_SHOPOWNER:
            index = findIndex(state, Owner_ID);
            state.splice(index, 1);
            return [...state];
        default: return state;
    }
}
export default shopowners;