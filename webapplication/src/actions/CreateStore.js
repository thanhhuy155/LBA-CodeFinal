import * as Types from '../constraints/CreateStoreCST'
import callAPI, { callAPIForFormData } from '../utils/apiCaller'
import SelectShopPostion from '../constraints/SelectShopPosition'

export const actSaveResultCreateStart = (data) => {
    return {
        type: Types.HANDLE_CREATE_STORE,
        data
    }
}

export const actCreateStore = (Store_Name, Store_Description, Store_District, Store_Ward, Store_Street, Store_PhoneNumber,
    Store_PriceMin, Store_PriceMax, StoreCatalog_ID, Store_OpenTime,
    Store_CloseTime, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, imageArray, lat, lng) => {
    return async (dispatch) => {
            var formData = new FormData();
            for (let i = 0; i < imageArray.length; i++) {
                if (i===0)
                    {
                        var typeFile = imageArray[0].imagePreviewUrl.split (';')[0].split('/')[1]
                        formData.append ('avatar', imageArray[0].file,`avatar.${typeFile}`)
                    }
                else
                formData.append('fileImage' + i, imageArray[i].file)
            }
                const dataAfterUploadImage = await callAPIForFormData('UploadListImages', formData)
                if (dataAfterUploadImage.message.success) {
                    const { ImageLink, ImageList } = dataAfterUploadImage.data
                    dispatch(actSaveResultCreateStart(await callAPI('WA_CreateStore', 'POST', {
                        Store_Name: Store_Name,
                        Store_Description: Store_Description,
                        Store_District: Store_District,
                        Store_Ward: Store_Ward,
                        Store_PhoneNumber: Store_PhoneNumber,
                        Store_Street: Store_Street,
                        Store_PriceMin: Store_PriceMin,
                        Store_PriceMax: Store_PriceMax,
                        StoreCatalog_ID: StoreCatalog_ID,
                        Store_Longitude: lng,
                        Store_Latitude: lat,
                        Store_OpenTime: Store_OpenTime,
                        Store_CloseTime: Store_CloseTime,
                        Monday: Monday,
                        Tuesday: Tuesday,
                        Wednesday: Wednesday,
                        Thursday: Thursday,
                        Friday: Friday,
                        Saturday: Saturday,
                        Sunday: Sunday,
                        Store_ImageLink: ImageLink,
                        Store_ImageList: ImageList,
                    })))
                }
                else {
                    dispatch (actSaveResultCreateStart(dataAfterUploadImage))
                }
        }
}