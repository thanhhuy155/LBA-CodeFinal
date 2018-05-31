import * as Types from './../constraints/ActionTypes';

var initialState = '';
var search = (state = initialState, action) =>{
    switch(action.type){
        case Types.SEARCH:
            return action.keyword;
        default:
            return state;
    }
};

export default search;