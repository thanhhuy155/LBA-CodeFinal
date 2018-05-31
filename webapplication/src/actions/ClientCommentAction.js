import * as Types from '../constraints/ClientCommentCST'
import callAPI, {callAPIForFormData} from '../utils/apiCaller'

const actSaveResultGetClientComment = ( data ) => {
    return {
        type: Types.CLIENT_COMMENT,
        data
    }
}

const actStopLoadmore = () => {
    return {
        type: Types.STOP_LOAD_MORE
    }
}

export const actHandleGetClientComment = (Store_ID, PageNumber) => {
    return (dispatch) => {
        return callAPI('WA_GetListRatingStoreByDateByIDStore', 'POST', {
            Store_ID,
            PageNumber
        }).then(async res => {
            await dispatch(actSaveResultGetClientComment(res));
            if (res.message.success)
                if (res.data.length===0){
                    dispatch (actStopLoadmore ())
                }
            else {
                dispatch (actStopLoadmore ())
            }
        })
    }
}