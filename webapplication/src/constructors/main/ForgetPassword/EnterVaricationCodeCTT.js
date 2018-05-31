import React, { Component } from 'react';
import EnterVaricationCode from '../../../components/main/ForgetPassword/EnterVaricationCode'
import {connect} from 'react-redux'
import {actForgetPassword} from '../../../actions/LoginAction'
import {actHandleEnterVerifiedCode} from '../../../actions/ForgotPasswordAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
class EnterVaricationCodeCTT extends Component {
  render() {
    const {positionProgress, onNextStep, dataEnterVerifiedPassword, onEnterVerifiedCode, onSwitchWaitingModal} = this.props;
    return (
      <EnterVaricationCode 
        positionProgress= {positionProgress} 
        onNextStep={onNextStep}
        dataEnterVerifiedPassword = {dataEnterVerifiedPassword}
        onEnterVerifiedCode = {onEnterVerifiedCode}
        onSwitchWaitingModal = {onSwitchWaitingModal}
        />
    )
  }
};

const mapStyleToProps = (state) => {
  return {
    positionProgress: state.handleForgetPasswordProgress,
    dataEnterVerifiedPassword: state.handleEnterVerifiedPassword
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onNextStep: (numberProgress) => {
      dispatch(actForgetPassword(numberProgress))
    },
    onEnterVerifiedCode: async (VerifiedCode) =>{
      await dispatch (actHandleEnterVerifiedCode(VerifiedCode))
    },
    onSwitchWaitingModal:  () => {
      dispatch (actSwitchWattingModal())
   }
  }
}

export default connect (mapStyleToProps,mapDispatchToProps)  (EnterVaricationCodeCTT)
