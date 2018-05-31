import * as Types from './../constraints/ActionTypes';
var initialState = [];
const sumdatas = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.FETCH_SUMDATA:
            return action.sumdatas;
        default: return state;
    }
}
export default sumdatas;