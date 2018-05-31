import * as Types from '../constraints/StoreManagementShopOwnerCST'
import * as TypesofResetingRedux from '../constraints/ResetReduxCST'
import Notifications, {notify} from 'react-notify-toast';
var findIndex = (shops, shopID) => {
    var result = -1;
    shops.forEach((shopItem, index) => {
        if (Number(shopItem.Store_ID) === Number (shopID)) {
            result = index;
        }
    });
    return result;
}

// Handle Sort For
var initialStateSortShop = 1
// 1: All, 2: Locked Shops, 3: Active Shops
export const handleSortShop = (state= initialStateSortShop,action)=>{
    switch (action.type)
    {   
        case Types.HANDLE_SORT_SHOP:
            return action.typeOfSort
        default:
            return state
    }
}

//Get All Shop
var initialStateGetAllShop = null;

export const handleGetStores = (state= initialStateGetAllShop,action)=>{
    switch (action.type)
    {   
        case Types.GET_ALL_SHOP:
            return action.data
        case Types.CHANGE_SHOP_STATUS:
            var resultFromChangeInformation = action.data
            if (resultFromChangeInformation.message.success){
                var chandedPosition = findIndex (state.data.storeDetailsManagementViewModel,action.idShop)
                if (state.data.storeDetailsManagementViewModel[chandedPosition].Store_Status ===1)
                    {
                        state.data.numberOfProgressingStore--
                        state.data.numberOfClosedStore++
                        state.data.storeDetailsManagementViewModel[chandedPosition].Store_Status =0
                    }
                else
                    {   
                        state.data.numberOfClosedStore--
                        state.data.numberOfProgressingStore++
                        state.data.storeDetailsManagementViewModel[chandedPosition].Store_Status =1
                    }
                return {...state,state}
            }
            else {
                return state
            }      
        default:
            return state
    }
}

// Get Shop Detail

var initialStateGetShopDetail = null;

export const handleGetShopDetail = (state = initialStateGetShopDetail, action) =>{
    switch (action.type) {
        case Types.GET_SHOP_DETAIL:
                return action.data
        case Types.CHANGE_INFORMATION_FOR_SHOP:var findIndex = (events, eventID) => {
            var result = -1;
            events.forEach((eventItem, index) => {
                if (eventItem.Promotion_ID === eventID) {
                    result = index;
                }
            });
            return result;
        }
            var resultFromChangeInformation = action.data
            if (resultFromChangeInformation.message.success){
                notify.show ('Information is changed successfully','success',2500,'')
                var changedShop = resultFromChangeInformation.data
                state.data.store_Details = changedShop
                return {...state, state}
            }
            else{
                notify.show (resultFromChangeInformation.message.error,'error',2500,'')
                return state
            }
        case Types.CHANGE_SHOP_STATUS:
            var resultFromChangeInformation = action.data
            if (resultFromChangeInformation.message.success){
                state.data.store_Details.Store_Status===1?state.data.store_Details.Store_Status =0 :state.data.store_Details.Store_Status=1
                return {...state,state}
            }
            else {
                return state
            }
        case TypesofResetingRedux.RESET_REDUX_FOR_SHOP_DETAIL:
            return null
        default:
            return state
    }
}

//Search Shop
var initialStateSearchShop = ""
export const handleSearchShop = (state = initialStateSearchShop, action) =>{
    switch (action.type) {
        case Types.HANDLE_SEARCH_SHOP:
                return action.nameOfShop
        default:
            return state
    }
}

//Get View Chart of Year
var initialStateGetViewChartOfYear = null
export const handleGetViewChartOfYear = (state = initialStateGetViewChartOfYear, action) =>{
    switch (action.type) {
        case Types.GET_VIEW_FOR_YEAR_CHART:
            return action.data;
        case TypesofResetingRedux.RESET_REDUX_FOR_SHOP_DETAIL:
            return null
        default: return state;
            
    }
}

//Get View Chart Of Month
export const handleGetViewChartOfMonth = (state = null, action) =>{
    switch (action.type) {
        case Types.GET_VIEW_FOR_MONTH_CHART:
            return action.data;
        case TypesofResetingRedux.RESET_REDUX_FOR_SHOP_DETAIL:
            return null
        default: return state;
    }
}

//Delete Shop
export const handleDeleteShop =  (state= null,action) =>{
    switch (action.type) {
        case Types.DELETE_SHOP:
            if (action.data.message.success)
            {
                notify.show ('The shop is deleted','success',2500,'')
                // alert ('The shop was deleted')
                // window.location.replace("/s/StoreManagementPage");
            }
            else {
                notify.show (action.data.message.error,'error',2500,'')
            }
            return action.data;
        default: return state;
    }
}