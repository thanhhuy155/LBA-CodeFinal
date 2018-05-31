import React, { Component } from 'react';
import {connect} from 'react-redux'
import TableShopInformation from '../../../components/shopOwner/ShopManagement/TableShopInformation'
import {actHandleDeleteShop} from '../../../actions/ShopManagementAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
import {actTranferParameterForChangeInformationModal, actSwitchChangeInformationModal} from '../../../actions/ModalChangeInformationAction'
class TableShopInformationCTT extends Component {
  render() {
    const {dataShopDetail, sortType, onDeleteShop, 
      onSwitchWaitingModal, onTranferParameterFormChangeInformationModal, onSwitchChangeInformationModal, resultAfterDeletingShop} = this.props
    if (dataShopDetail)
    {
      if (dataShopDetail.data)
        return (
          <TableShopInformation 
            dataShopDetail = {dataShopDetail.data} 
            sortType ={sortType}
            onDeleteShop = {onDeleteShop}
            onSwitchWaitingModal = {onSwitchWaitingModal}
            onTranferParameterFormChangeInformationModal = {onTranferParameterFormChangeInformationModal}
            onSwitchChangeInformationModal ={onSwitchChangeInformationModal}
            resultAfterDeletingShop = {resultAfterDeletingShop}
            />
        )
      else {
        return (
          <p>Your shop is not exists</p>
        )
      }
    }
    else {
      return (
        <p>Loading...</p>
      )
    }
  }
};

const mapStyleToProps = (state) => {
  return {
    dataShopDetail: state.handleGetShopDetail,
    resultAfterDeletingShop: state.handleDeleteShop
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteShop: async (idShop) => {
      await dispatch(actHandleDeleteShop(idShop))        
    },
    onSwitchWaitingModal:  () => {
      dispatch (actSwitchWattingModal())
   },
   onTranferParameterFormChangeInformationModal : (parameters) =>{
     dispatch (actTranferParameterForChangeInformationModal (parameters))
   },
   onSwitchChangeInformationModal : () =>{
     dispatch (actSwitchChangeInformationModal ())
   }
  }
}

export default connect (mapStyleToProps,mapDispatchToProps) (TableShopInformationCTT)
