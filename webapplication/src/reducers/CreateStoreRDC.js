import * as Types from '../constraints/CreateStoreCST'
import callAPI, { callAPIForFormData } from '../utils/apiCaller'
import SelectShopPostion from '../constraints/SelectShopPosition'
import Notifications, {notify} from 'react-notify-toast';
var initialState = null;

export const handleCreateStore = (state = initialState, action) => {
    switch (action.type) {
        case Types.HANDLE_CREATE_STORE:
            if (action.data.message.success){
                notify.show ('Your shop was created','success',2500,'')
                // alert ('Your shop was created')
                // window.location.replace("/s/StoreManagementPage");
            }
            else{
                notify.show (action.data.message.error,'error',2500,'')
            }
            return action.data;
        default: 
            return state;
    }
}