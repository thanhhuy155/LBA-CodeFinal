import {combineReducers} from 'redux'
import {handleProgressBar} from './RegisterationProgressbar'
import {handleForgetPasswordProgress} from './ForgetPasswordProgressReducer'
import {handleLogin} from './Login'
import {handleAccountRegister} from './AccountRegisterRDC'
import {handleVerifyAccount} from './VerifyAccountRDC'
import {handleUpdateAccountInformationWhenRegistering} from './UpdateAcountInformationWhenRegistering'
import {handleEnterCurrentEmail, handleEnterVerifiedPassword , handleEnterNewPassword} from './ForgetPasswordRDC'
import {handleSwitchWattingToken} from './MainRDC'
import {handleCreateStore} from './CreateStoreRDC'
import {handleGetStores, handleGetShopDetail, handleSortShop, handleSearchShop, handleGetViewChartOfYear, handleGetViewChartOfMonth, handleDeleteShop} from './StoreManagementShopOwnerRDC'
import {handleGetEventStaristic, handleGetEventsList, handleGetCustomerCommentForEvent} from './EventManagementRDC'
import {handleGetDataForModalEventDetail, handleSwitchModalEventDetail} from './ModalEventDetailRDC'
import {handleSwitchChangeInformationModal, handleTransferParametersForChangeInformationModal} from './ModalChangeInformationRDC'
import {handleGetClientComment, handleStopLoadMore} from './ClientCommentRDC'
import {handleGetPaymentHistoryForShop, handleGetPaymentHistoryForShopOwner} from './PaymentHistoryRDC'
import {handleInputLocation} from './InputLocationRDC'
import admins from './Admins';
import customers from './Customer';
import shopowners from './ShopOwner';
import shops from './Shop'
import sumdatas from './SumDataAdmin';
import promotions from './Promotion'
import search from './Search.js';
import {handleSortShopForAdmin} from './ShortShopForAdminRDC'
import {handleSortPromotionsForAdmin} from './SortPromotionsForAdmin'
const appReducers = combineReducers ({
    handleProgressBar,
    handleForgetPasswordProgress,
    handleLogin,
    handleAccountRegister,
    handleVerifyAccount,
    handleUpdateAccountInformationWhenRegistering,
    handleEnterCurrentEmail,
    handleEnterNewPassword,
    handleEnterVerifiedPassword,
    handleSwitchWattingToken,
    handleCreateStore,
    handleGetStores,
    handleGetShopDetail,
    handleSortShop,
    handleSearchShop,
    handleGetEventStaristic,
    handleGetEventsList,
    handleGetViewChartOfYear,
    handleGetViewChartOfMonth,
    handleDeleteShop,
    handleSwitchModalEventDetail,
    handleGetDataForModalEventDetail,
    handleSwitchChangeInformationModal,
    handleTransferParametersForChangeInformationModal,
    handleGetClientComment,
    handleStopLoadMore,
    handleGetCustomerCommentForEvent,
    handleGetPaymentHistoryForShop,
    handleGetPaymentHistoryForShopOwner,
    handleInputLocation,
    admins,
    customers,
    shopowners,
    shops,
    sumdatas,
    promotions,
    search,
    handleSortShopForAdmin,
    handleSortPromotionsForAdmin
})
export default appReducers