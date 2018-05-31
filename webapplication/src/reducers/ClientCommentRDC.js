import * as Types from '../constraints/ClientCommentCST'
import callAPI, { callAPIForFormData } from '../utils/apiCaller'
import SelectShopPostion from '../constraints/SelectShopPosition'
import * as TypesOfResetRedux from '../constraints/ResetReduxCST'
var initialState = null;

export const handleGetClientComment = (state = initialState, action) => {
    switch (action.type) {
        case Types.CLIENT_COMMENT:
            var resultFromAction = action.data
            if (resultFromAction)
            {
                if (resultFromAction.message.success)
                {
                    if (resultFromAction.data.length >0)
                        if (initialState)
                            state = state.concat (resultFromAction.data)
                        else state = resultFromAction.data
                }
            }
            return state;
        case TypesOfResetRedux.RESET_REDUX_FOR_RATING:
            return null
        default: 
            return state;
    }
}

export const handleStopLoadMore= (state =true, action) =>{
    switch (action.type) {
        case Types.STOP_LOAD_MORE :
            return false
        default: return state
    }
}