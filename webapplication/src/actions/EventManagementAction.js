import * as Types from '../constraints/EventManangement'
import callAPI, {callAPIForFormData} from '../utils/apiCaller'
import { SEND_DATA_EVENT_DETAIL } from '../constraints/ModalEventDetailCST';

// Get Event Staristic
const actSaveResultEventStaristic = ( data ) => {
    return {
        type: Types.GET_EVENT_STARISTIC,
        data
    }
}

export const actHandleGetEventStaristic = (id) => {
    return (dispatch) => {
        return callAPI('WA_PromotionsStaticByIDStore/' +id, 'GET', null).then(res => {
             dispatch(actSaveResultEventStaristic(res));
        })
    }
}

//Get Events List
const actSaveResultEventsList = (data) =>{
    return {
        type: Types.GET_EVENT_LIST,
        data
    }
}

export const actHandleGetEventsList = (id) =>{
    return (dispatch) => {
        return callAPI ('WA_GetPromotionsByIDStore/' +id, 'GET',null).then (res =>{
            dispatch (actSaveResultEventsList (res))
        })
    }
}

//Create Event

export const actSaveResultCreateEvent = (data) => {
    return {
        type: Types.CREATE_EVENT_FOR_SHOP,
        data,
    }
}

export const actCreateEvent = (Store_Details_ID, Promotion_Title, Promotion_Description, Promotion_DateStart, Promotion_DateEnd, imageArray) => {
    return async (dispatch) => {
        var formData = new FormData();
        for (let i = 0; i < imageArray.length; i++) {
            formData.append('fileImage' + i, imageArray[i].file)
        }
            const dataAfterUploadImage = await callAPIForFormData('UploadListImages', formData)
            if (dataAfterUploadImage.message.success) {
                const {ImageList} = dataAfterUploadImage.data
                dispatch(actSaveResultCreateEvent (await callAPI('WA_Promotions', 'POST', {
                    Promotion_Title,
                    Promotion_Description,
                    Promotion_DateStart,
                    Promotion_DateEnd,
                    Store_Details_ID,
                    Promotion_Image : ImageList
                    })))
                }
                else {
                    dispatch (actSaveResultCreateEvent(dataAfterUploadImage))
                }
            
    }
}

//Delete Event
export const actSaveResultFromDeletingEvent = (data, idDeletedShop,txtStartDate, txtCloseDate) => {
    return {
        type: Types.DELETE_EVENT,
        data,
        idDeletedShop,
        StartDate: txtStartDate,
        CloseDate: txtCloseDate
    }
}

export const actHandleDeleteEvent = (idEvent, txtStartDate, txtCloseDate) =>{
    return (dispatch) =>{
        return callAPI ('Promotions/' + idEvent, 'DELETE', null).then (res =>{
            dispatch (actSaveResultFromDeletingEvent (res, idEvent, txtStartDate, txtCloseDate))
        })
    }
}

//  Change Event Information
export const actSaveResultFromChangingEvent =  (data, DateStart, DateEnd) =>{
    return {
        type: Types.CHANGE_INFORMATION_EVENT,
        data,
        oldStartDate: DateStart,
        oldEndDate: DateEnd
    }
}

export const actHandleChangeEvent = (Promotion_ID, Promotion_Title, Promotion_Description,imageArray, 
    Promotion_DateStart, Promotion_DateEnd, deletedImageList, remainingPictures, keepStartDate, keepCloseDate) => {
    return async (dispatch) => 
    {
        var formData = new FormData();
        for (let i = 0; i < imageArray.length; i++) {
            formData.append('fileImage' + i, imageArray[i].file)
        }
        const dataAfterUploadImage = callAPIForFormData('UploadListImages', formData)
            
        const dataAfterDeletingImage = callAPI ('WA_DeleteImagesPromotion', 'DELETE', {
            StringDelete : deletedImageList,
	        Promotion_ID : Promotion_ID
        })
        await Promise.all ([dataAfterUploadImage, dataAfterDeletingImage]).then (async (value) =>{
            if (value[0].message.success && value [1].message.success){
                const {ImageList} = value[0].data
                var imagesArrayForPut = []
                if (remainingPictures.length !==0)
                    imagesArrayForPut.push (remainingPictures)
                if (ImageList.length !==0)
                    imagesArrayForPut.push (ImageList)
                dispatch(actSaveResultFromChangingEvent (await callAPI('Promotions', 'PUT', {
                    Promotion_ID,
                    Promotion_Title,
                    Promotion_Description,
                    Promotion_Image: imagesArrayForPut.toString (),
                    Promotion_DateStart,
                    Promotion_DateEnd,
                }), keepStartDate, keepCloseDate))
            }
            else {
                dispatch (actSaveResultFromChangingEvent(dataAfterUploadImage))
            }
        })           
    }
}

const actSaveResultFromGettingEventComment = (data) =>{
    return {
        type: Types.GET_CUSTOMER_COMMENT_FOR_EVENT,
        data
    }
}

export const actGettingEventComment = (Promotion_ID, PageNumber) =>{
    return (dispatch) =>{
        return callAPI ('WA_GetCommentsByIDPromotionPaging', 'POST', {
            Promotion_ID,
            PageNumber
        }).then (res =>{
            dispatch (actSaveResultFromGettingEventComment (res))
        })
    }
}