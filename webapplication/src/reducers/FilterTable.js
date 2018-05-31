import * as Types from './../constraints/ActionTypes';

var initialState = {
    name: '',
    status: -1
};
var search = (state = initialState, action) =>{
    switch(action.type){
        case Types.FILTER_TABLE:
        console.log(action);
            return state;
        default:
            return state;
    }
};

export default search;