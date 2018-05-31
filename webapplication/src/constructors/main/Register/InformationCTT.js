import React, { Component } from 'react';
import { connect } from 'react-redux'
import Information from '../../../components/main/Register/Information'
import { actRegisterProgress } from '../../../actions/LoginAction'
import {actHandleUpdateInformation} from '../../../actions/RegisterAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
class InformationCTT extends Component {
  render() {
    const { positionProgressBar, onNextProgressBar, dataUpdateInformation, onHandleUpdateInformation, onSwitchWaitingModal } = this.props
    return (
      <Information 
        onNextProgressBar={onNextProgressBar} 
        positionProgressBar={positionProgressBar} 
        dataUpdateInformation = {dataUpdateInformation}
        onHandleUpdateInformation = {onHandleUpdateInformation}
        onSwitchWaitingModal = {onSwitchWaitingModal}
        />
    )
  }
};

const mapStyleToProps = (state) => {
  return {
    positionProgressBar: state.handleProgressBar,
    dataUpdateInformation: state.handleUpdateAccountInformationWhenRegistering,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onNextProgressBar: (numberProgressBar) => {
      dispatch(actRegisterProgress(numberProgressBar))
    },
    onHandleUpdateInformation: async (Owner_FirstName , Owner_LastName , Owner_BusinessType, Owner_PhoneNumber, Owner_Gender) =>{
      await dispatch (actHandleUpdateInformation (localStorage.getItem('ProcessingEmail'), Owner_FirstName , Owner_LastName , Owner_BusinessType, Owner_PhoneNumber, Owner_Gender))
    },
    onSwitchWaitingModal:  () => {
      dispatch (actSwitchWattingModal())
   }
  }
}
export default connect(mapStyleToProps, mapDispatchToProps)(InformationCTT)