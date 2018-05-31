import * as Types from './../constraints/ActionTypes';
var initialState = [];
var findIndex = (admins, Admin_ID) => {
    var result = -1;
    admins.forEach((admins, index) => {
        if (admins.Admin_ID === Admin_ID) {
            result = index;
        }
    });
    return result;
}

const admins = (state = initialState, action) => {
    var index = -1;
    var { Admin_ID } = action;
    switch (action.type) {
        case Types.FETCH_ADMIN:
            return action.admins;
        case Types.DELETE_ADMIN: 
            index = findIndex(state, Admin_ID);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_ADMIN:
            state.push(action.admin);
        break
        default: return state;
    }
}
export default admins;