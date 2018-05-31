import React, { Component } from 'react';
import {connect} from 'react-redux'
import Verificaion from '../../../components/main/Register/Verificaion'
import {actRegisterProgress} from '../../../actions/LoginAction'
import {actHandleAccountRegister, actHandleVerifyAccount} from '../../../actions/RegisterAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
class VerificationCTT extends Component {
  render() {
    const {
      positionProgressBar,
      onNextProgressBar,
      dataAccountRegister, 
      onHandleAccountRegister, 
      dataAccountVerification,
      onHandleAccountVerification,
      onSwitchWaitingModal} = this.props
    return (
        <Verificaion 
          onNextProgressBar= {onNextProgressBar} 
          positionProgressBar={positionProgressBar}
          dataAccountRegister = {dataAccountRegister}
          onHandleAccountRegister = {onHandleAccountRegister}
          dataAccountVerification = {dataAccountVerification}
          onHandleAccountVerification = {onHandleAccountVerification}
          onSwitchWaitingModal = {onSwitchWaitingModal}
          />
    )
  }
};

const mapStyleToProps = (state) => {
    return {
      positionProgressBar: state.handleProgressBar,
      dataAccountRegister: state.handleAccountRegister,
      dataAccountVerification: state.handleVerifyAccount,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
      onNextProgressBar: (numberProgressBar) => {
        dispatch(actRegisterProgress(numberProgressBar))
      },
      onHandleAccountRegister: async (userName, passWord) =>{
        await dispatch (actHandleAccountRegister (userName, passWord))
      },
      onHandleAccountVerification: async (userName, VerifyCode) =>{
        await dispatch (actHandleVerifyAccount (userName, VerifyCode))
      },
      onSwitchWaitingModal:  () => {
        dispatch (actSwitchWattingModal())
     }
    }
}
export default connect (mapStyleToProps,mapDispatchToProps)(VerificationCTT)