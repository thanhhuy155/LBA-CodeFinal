import * as Types from './../constraints/ActionTypes';
var initialState = [];
var findIndex = (customers, Customer_ID) => {
    var result = -1;
    customers.forEach((customers, index) => {
        if (customers.Customer_ID === Customer_ID) {
            result = index;
        }
    });
    return result;
}

const customers = (state = initialState, action) => {
    var index = -1;
    var { Customer_ID } = action;
    switch (action.type) {
        case Types.FETCH_CUSTOMER:
            return action.customers;
        case Types.DELETE_CUSTOMER:
            index = findIndex(state, Customer_ID);
            state.splice(index, 1);
            return [...state];
        default: return state;
    }
}
export default customers;