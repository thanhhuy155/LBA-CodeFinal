import React, { Component } from 'react';
import EnterPassWord from '../../../components/main/ForgetPassword/EditPassWord'
import {connect} from 'react-redux'
import {actForgetPassword} from '../../../actions/LoginAction'
import {actHandleEnterNewPassword} from '../../../actions/ForgotPasswordAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
class EditPassWordCTT extends Component {
  render() {
    const {
      positionProgress, 
      onNextStep, 
      dataEnterNewPassword , 
      onEnterNewPassword,
      onSwitchWaitingModal
    } = this.props;
    return (
      <EnterPassWord 
        positionProgress= {positionProgress} 
        onNextStep={onNextStep}
        dataEnterNewPassword = {dataEnterNewPassword}
        onEnterNewPassword = {onEnterNewPassword}
        onSwitchWaitingModal = {onSwitchWaitingModal}
        />
    )
  }
};

const mapStyleToProps = (state) => {
  return {
    positionProgress: state.handleForgetPasswordProgress,
    dataEnterNewPassword: state.handleEnterNewPassword
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onNextStep: (numberProgress) => {
      dispatch(actForgetPassword(numberProgress))
    },
    onEnterNewPassword: async (newPassword) =>{
      await dispatch (actHandleEnterNewPassword (newPassword))
    },
    onSwitchWaitingModal:  () => {
      dispatch (actSwitchWattingModal())
   }
  }
}

export default connect (mapStyleToProps,mapDispatchToProps) (EditPassWordCTT)
