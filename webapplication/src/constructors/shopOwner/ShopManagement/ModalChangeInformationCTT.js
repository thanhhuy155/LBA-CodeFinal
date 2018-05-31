import React, { Component } from 'react'
import ModalChangeInformation from '../../../components/shopOwner/ShopManagement/ModalChangeInformation'
import { connect } from 'react-redux'
import {actSwitchChangeInformationModal, onSwitchChangeInformationModal} from '../../../actions/ModalChangeInformationAction'
import {actHandleChangeShopInformation, actHandleGetShopManagement} from '../../../actions/ShopManagementAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
class ModalChangeInformationCTT extends Component {
    render() {
        const {parametersOfChangedShop, isOpenModalChangeInformation, 
            onSwitchChangeInformationModal, onSwitchWaitingModal, onChangeShopInformation, onReGetShops,dataShopDetail} = this.props
        return (
            <ModalChangeInformation 
                parametersOfChangedShop = {parametersOfChangedShop}
                isOpenModalChangeInformation = {isOpenModalChangeInformation}
                onSwitchChangeInformationModal = {onSwitchChangeInformationModal}
                onSwitchWaitingModal = {onSwitchWaitingModal}
                onChangeShopInformation ={onChangeShopInformation}
                onReGetShops = {onReGetShops}
                dataShopDetail = {dataShopDetail}
            />
        )
    }
}

const mapStyleToProps = (state) => {
    return {
        parametersOfChangedShop: state.handleTransferParametersForChangeInformationModal,
        isOpenModalChangeInformation: state.handleSwitchChangeInformationModal,
        dataShopDetail: state.handleGetShopDetail
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSwitchChangeInformationModal: () => {
            dispatch(actSwitchChangeInformationModal())
        },
        onSwitchWaitingModal:  () => {
            dispatch (actSwitchWattingModal())
         },
        onChangeShopInformation: async (Store_ID,Store_Name,Store_Description,
            Store_District, Store_Ward, Store_Street, Store_PhoneNumber, Store_PriceMin, Store_PriceMax,
            StoreCatalog_ID, Store_OpenTime,Store_CloseTime,
            Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, imageArray, oldAvartarLink, lat, lng, deletedImagesList, remainingPictures) =>{
            await dispatch (actHandleChangeShopInformation (Store_ID,Store_Name,Store_Description,
                Store_District, Store_Ward, Store_Street, Store_PhoneNumber, Store_PriceMin, Store_PriceMax,
                StoreCatalog_ID, Store_OpenTime,Store_CloseTime,
                Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, imageArray, oldAvartarLink, lat, lng, deletedImagesList, remainingPictures))
        },
        onReGetShops: async (shopOwnerID) =>{
            await dispatch (actHandleGetShopManagement (shopOwnerID))
        }
    }
}
export default connect(mapStyleToProps, mapDispatchToProps)(ModalChangeInformationCTT)