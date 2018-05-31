import React, { Component } from 'react'
import * as Types from '../constraints/StoreManagementShopOwnerCST'
import callAPI, { callAPIForFormData } from '../utils/apiCaller'
import SelectShopPostion from '../constraints/SelectShopPosition'

// Sort for Shop
export const actHandleSortShop = (typeOfSort) =>{
    return {
        type : Types.HANDLE_SORT_SHOP,
        typeOfSort
    }
}

//SearchShop
export const actSearchShop = (nameOfShop) =>{
    return {
        type : Types.HANDLE_SEARCH_SHOP,
        nameOfShop
    }
}
// Get all shops
const actSaveResultStoreOwnerManage = ( data ) => {
    return {
        type: Types.GET_ALL_SHOP,
        data
    }
}

export const actHandleGetShopManagement = () => {
    return (dispatch) => {
        return callAPI('WA_StoreOwnerManagement', 'GET', null).then(res => {
             dispatch(actSaveResultStoreOwnerManage(res));
        })
    }
}

// Get Shop Detail

const actSaveResultGetShopDetail = (data) =>{
    return {
        type: Types.GET_SHOP_DETAIL,
        data
    }
}

export const actHandleGetShopDetail = (id) =>{
    return (dispatch) => {
        return callAPI ('WA_Store_Details/'+id, 'GET', null).then (res => {
            dispatch (actSaveResultGetShopDetail(res))
        }) 
    }
}

// Get View Chart of Year
const actSaveResultGetViewChartOfYear = (data) =>{
    return {
        type : Types.GET_VIEW_FOR_YEAR_CHART,
        data
    }
}

export const actHandleGetViewChartOfYear = (idShop, year) =>{
    return (dispatch) =>{
        return callAPI ('WA_ViewChartOfYear', 'POST', {
            Store_ID : idShop,
	        Year : year,
        }).then (res =>{
            dispatch (actSaveResultGetViewChartOfYear (res))
        })
    }
}

//Get View Chart Of Month
const actSaveResultGetViewChartOfMonth = (data) =>{
    return {
        type : Types.GET_VIEW_FOR_MONTH_CHART,
        data
    }
}

export const actHandleGetViewChartOfMonth = (idShop, year, month) =>{
    return (dispatch) =>{
        return callAPI ('WA_ViewChartOfMonth', 'POST', {
            Store_ID : idShop,
	        Year : year,
	        Month: month
        }).then (res =>{
            dispatch (actSaveResultGetViewChartOfMonth (res))
        })
    }
}

// Delete Shop

//Get View Chart Of Month
const actSaveResultDeleteShop = (data, idOfDeletedShop) =>{
    return {
        type : Types.DELETE_SHOP,
        data,
        idOfDeletedShop
    }
}

export const actHandleDeleteShop = (idShop) =>{
    return (dispatch) =>{
        return callAPI ('Store_Details/' + idShop, 'DELETE', null).then (res =>{
            dispatch (actSaveResultDeleteShop (res, idShop))
        })
    }
}

//Change Information for Shop
const actSaveResultChangeShopInformation = (data) =>{
    return {
        type: Types.CHANGE_INFORMATION_FOR_SHOP,
        data
    }
}

export const actHandleChangeShopInformation = (Store_ID,Store_Name,Store_Description,
    Store_District, Store_Ward, Store_Street, Store_PhoneNumber, Store_PriceMin, Store_PriceMax,
    StoreCatalog_ID, Store_OpenTime,Store_CloseTime,
    Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, imageArray, oldAvartarLink, lat, lng,deletedImageList, remainingPictures) =>{
        return async (dispatch) => {
            var formData = new FormData();
            if (oldAvartarLink.length ===0)
            {
                for (let i = 0; i < imageArray.length; i++) {
                    if (i===0)
                        {
                            var typeFile = imageArray[0].imagePreviewUrl.split (';')[0].split('/')[1]
                            formData.append ('avatar', imageArray[0].file,`avatar.${typeFile}`)
                        }
                    else
                    formData.append('fileImage' + i, imageArray[i].file)
                }
            }
            else {
                for (let i = 0; i < imageArray.length; i++) {
                    formData.append('fileImage' + i, imageArray[i].file)
                }
            }

            const dataAfterDeleteImage = callAPI ('WA_DeleteImagesStore', 'DELETE', {
                StringDelete : deletedImageList,
                Store_ID : Store_ID,
                IsAvatar : 0  
            })

            const dataAfterUploadImage = callAPIForFormData('UploadListImages', formData)

            await Promise.all ([dataAfterDeleteImage,dataAfterUploadImage ]).then (async (value) =>{
                if (value[0].message.success && value[1].message.success)
                    {
                        const { ImageLink, ImageList } = value[1].data
                        var imagesArrayForPut = []
                        if (remainingPictures.length !==0)
                            imagesArrayForPut.push (remainingPictures)
                        if (ImageList.length !==0)
                            imagesArrayForPut.push (ImageList)
                            dispatch(actSaveResultChangeShopInformation(await callAPI('Store_Details', 'PUT', {
                                Store_ID: Store_ID,
                                Store_Name :Store_Name,
                                Store_Description :Store_Description,
                                Store_District :Store_District,
                                Store_Ward :Store_Ward,
                                Store_Street :Store_Street,
                                Store_PhoneNumber :Store_PhoneNumber,
                                Store_PriceMin :Store_PriceMin,
                                Store_PriceMax :Store_PriceMax,
                                StoreCatalog_ID :StoreCatalog_ID,
                                Store_Longitude :lng,
                                Store_Latitude :lat,
                                Store_OpenTime :Store_OpenTime,
                                Store_CloseTime :Store_CloseTime,
                                Monday :Monday,
                                Tuesday :Tuesday,
                                Wednesday :Wednesday,
                                Thursday :Thursday,
                                Friday :Friday,
                                Saturday :Saturday,
                                Sunday : Sunday,
                                Store_ImageLink : oldAvartarLink.length!==0?oldAvartarLink:ImageLink,
                                Store_ImageList:  imagesArrayForPut.toString ()
                            })))
                    }
                    else{
                        dispatch (actSaveResultChangeShopInformation(dataAfterUploadImage))
                    }  
                })
        }
}

const saveResultFromChangingStatusShop = (data, idShop) =>{
    return {
        type: Types.CHANGE_SHOP_STATUS,
        data,
        idShop
    }
}

export const acthandleChangeShopStatus = (idShop) =>{
    return (dispatch) =>{
        return callAPI ('WA_ChangeStatusStore/' + idShop, 'PUT', null).then (res =>{
            dispatch (saveResultFromChangingStatusShop (res, idShop))
        })
    }
}