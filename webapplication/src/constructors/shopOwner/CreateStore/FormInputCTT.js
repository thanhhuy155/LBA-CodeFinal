import React, { Component } from 'react';
import FormInput from '../../../components/shopOwner/CreateStore/FormInput'
import {connect} from 'react-redux'
import {actCreateStore} from '../../../actions/CreateStore'
import { actSwitchWattingModal } from '../../../actions/MainAction'
class FormInputCTT extends Component {
    render() {
        const {dataAfterCreateStore, onCreateStore, onSwitchWaitingModal} = this.props
        return (
            <FormInput 
                dataAfterCreateStore= {dataAfterCreateStore} 
                onCreateStore = {onCreateStore}
                onSwitchWaitingModal = {onSwitchWaitingModal}
                />
        )
    }
};

const mapStyleToProps = (state) => {
    return {
      dataAfterCreateStore: state.handleCreateStore,
      dataFromInputPostition: state.handleInputLocation
    }
  }
  
const mapDispatchToProps = (dispatch, props) => {
    return {
      onCreateStore: async (Store_Name,Store_Description,Store_District,Store_Ward,Store_Street,Store_PhoneNumber,
        Store_PriceMin,Store_PriceMax,StoreCatalog_ID, Store_OpenTime,
        Store_CloseTime,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday, imageArray, lat, lng) => {
        await dispatch(actCreateStore(Store_Name,Store_Description,Store_District,Store_Ward,Store_Street,Store_PhoneNumber,
            Store_PriceMin,Store_PriceMax,StoreCatalog_ID, Store_OpenTime,
            Store_CloseTime,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday, imageArray, lat, lng))
      },
      onSwitchWaitingModal:  () => {
        dispatch (actSwitchWattingModal())
     }
    }
  }


export default connect (mapStyleToProps,mapDispatchToProps) (FormInputCTT)
