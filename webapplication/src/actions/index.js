import * as Types from './../constraints/ActionTypes';
import callAPI from '../utils/apiCaller';

export const actSaveDataSetchAdmin = (admins) => {
    return {
        type: Types.FETCH_ADMIN,
        admins
    }
}

export const actFetchAdminsRequest = () => {
    return dispatch => {
        return callAPI('Admin_Details', 'GET', null).then(res => {
            dispatch(actSaveDataSetchAdmin(res.data.admin_Details));
        }).catch(error => {
            return error.message;

        })
    };
}

//Custonmer

export const actFeatchCustomer = (customers) => {
    return {
        type: Types.FETCH_CUSTOMER,
        customers
    }
}
export const actFeatchCustomerRequest = () => {

    return dispatch => {
        return callAPI('customer_Details','GET', null).then(res => {
            dispatch(actFeatchCustomer(res.data.customer_Details))
        })
    }
}
//Shop Owner
export const actFeatchShopOwner =(shopowners) =>{
    return {
        type: Types.FETCH_SHOPOWNER,
        shopowners
    }
}
export const actFeatchShopOwnerRequest = () =>{
    return dispatch =>{
        return callAPI('Store_Owners_Details','GET', null).then(res => {
            dispatch(actFeatchShopOwner(res.data.store_Owner_Details))
       
        }).catch(error => {
            return error.message;
        
        })
    }   
}
//Shop list
export const actFeatchShop = (shops) => {
    return {
        type: Types.FETCH_SHOP,
        shops
    }
}

export const actFeatchShopRequest = () => {
    return dispatch => {
        return callAPI('Store_Details', 'GET', null).then(res => {
            dispatch(actFeatchShop(res.data))
            console.log('shop', res);
        }).catch(error => {
            return error.message;
            console.log('errorrrrrrrrrrrr' + error.message);

        })
    }
}
//Promotion
export const actFeatchPromotion = (promotions) =>{
    return {
        type: Types.FETCH_PROMOTION,
        promotions
    }
}

export const actFeatchPromotionRequest = () => {
    return dispatch =>{
        return callAPI('Promotions', 'GET', null).then (res => {
            dispatch(actFeatchPromotion(res.data))
            console.log('promotion',res);
        }).catch(error => {
            return error.message;
        })
    }
}

// Fata Staticfic
export const actFeatchDataSum = (sumdatas) =>{
    return {
        type: Types.FETCH_SUMDATA,
        sumdatas
    }
}

export const actFeatchDataSumRequest = () => {
    return dispatch =>{
        return callAPI('GetAdminStatic', 'GET', null).then (res => {
            dispatch(actFeatchDataSum(res.data));
            console.log('data sum', res);
        }).catch(error => {
            return error.message;
        })
    }
}




// //Delete

// export const actDeleteProductRequest = (id) =>{
//     return dispatch => {
//         return callAPI(`products/${id}`, 'DELETE', null).then (res =>{
//             dispatch(actDeleteProduct(id));
//         })
//     }
// }

// export const actDeleteProduct = (id) =>{
//     return {
//         type: Types.DELETE_PRODUCT,
//         id
//     }
// }
//Delete Admin

export const actDeleteAdminRequest = (Admin_ID) =>{
    return dispatch => {
        return callAPI(`Admin_Details/${Admin_ID}`, 'DELETE', null).then (res =>{
            dispatch(actDeleteAdmin(Admin_ID));
        })
    }
}

export const actDeleteAdmin = (Admin_ID) =>{
    return {
        type: Types.DELETE_ADMIN,
        Admin_ID
    }
}
// Delete Customer
export const actDeleteCustomerRequest = (Customer_ID) =>{
    return dispatch => {
        return callAPI(`Customer_Details/${Customer_ID}`, 'DELETE', null).then (res =>{
            dispatch(actDeleteCustomer(Customer_ID));
        })
    }
}

export const actDeleteCustomer = (Customer_ID) =>{
    return {
        type: Types.DELETE_CUSTOMER,
        Customer_ID
    }
}

//Delete ShopOwner
export const actDeleteShopOwnerRequest = (Owner_ID) => {
    return dispatch => {
        return callAPI(`Store_Owners_Details/${Owner_ID}`, 'DELETE', null).then(res => {
            dispatch(actDeleteShopOwner(Owner_ID));
        }).catch(error => {
            return error.message;
            
        })
    }
}

export const actDeleteShopOwner = (Owner_ID) => {
    return {
        type: Types.DELETE_SHOPOWNER,
        Owner_ID
    }
}
//Delete Shop
export const actDeleteShopRequest = (Store_ID) => {
    return dispatch => {
        return callAPI(`Store_Details/${Store_ID}`, 'DELETE', null).then(res => {
            dispatch(actDeleteShop(Store_ID));
        }).catch(error => {
            return error.message;
        })
    }
}

export const actDeleteShop = (Store_ID) => {
    return {
        type: Types.XOA_STORE,
        Store_ID
    }
}
//Delete Promotion
export const actDeletePromotion = (Promotion_ID) => {
    return {
        type: Types.DELETE_PROMOTION,
        Promotion_ID
    }
}

export const actDeletePromotionRequest = (Promotion_ID) => {
        return dispatch => {
        return callAPI(`Promotions/${Promotion_ID    }`, 'DELETE', null).then(res => {
            dispatch(actDeletePromotion(Promotion_ID));
        }).catch(error => {
            return error.message;
        })
        }
        }
//Add
export const actAddProductRequest = (product) =>{
    return dispatch =>{
        return callAPI('products','POST',product).then(res =>{
            dispatch(actAddProduct(res.data))
        })
    }
}
export const actAddProduct = (product) =>{
    return{
        type: Types.ADD_PRODUCT,
        product
    }
}
 
// //Add
// export const actAddProductRequest = (product) =>{
//     return dispatch =>{
//         return callAPI('products','POST',product).then(res =>{
//             dispatch(actAddProduct(res.data))
//         })
//     }
// }
// export const actAddProduct = (product) =>{
//     return{
//         type: Types.ADD_PRODUCT,
//         product
//     }
// }
 

// Sort for Shop
export const actHandleSortShop = (typeOfSort) => {
    return {
        type: Types.HANDLE_SORT_SHOP,
        typeOfSort
    }
}

//SearchShop
export const actSearchShop = (nameOfShop) => {
    return {
        type: Types.HANDLE_SEARCH_SHOP,
        nameOfShop
    }
}

//Search task
export const searchTask = (keyword) => {
    return {
        type: Types.SEARCH,
        keyword // keyword : keyword
    }
}
//Filter task
export const filterTask = (filter) => {
    return {
        type: Types.FILTER_TABLE,
        filter // name & Stt
    }
}
