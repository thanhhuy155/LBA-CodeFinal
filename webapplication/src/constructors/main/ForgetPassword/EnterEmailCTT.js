import React, { Component } from 'react';
import EnterEmail from '../../../components/main/ForgetPassword/EnterEmail'
import {connect} from 'react-redux'
import {actForgetPassword} from '../../../actions/LoginAction'
import {actHandleEnterCurrentEmail} from '../../../actions/ForgotPasswordAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
class EnterEmailCTT extends Component {
  render() {
    const {positionProgress, onNextStep, dataHandleEnterCurrentEmail ,onEnterCurrentEmail, onSwitchWaitingModal} = this.props;
    return (
      <EnterEmail 
        positionProgress= {positionProgress} 
        onNextStep={onNextStep}
        onEnterCurrentEmail = {onEnterCurrentEmail}
        dataHandleEnterCurrentEmail = {dataHandleEnterCurrentEmail}
        onSwitchWaitingModal = {onSwitchWaitingModal}
        />
    )
  }
};

const mapStyleToProps = (state) => {
  return {
    positionProgress: state.handleForgetPasswordProgress,
    dataHandleEnterCurrentEmail: state.handleEnterCurrentEmail
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onNextStep: (numberProgress) => {
      dispatch(actForgetPassword(numberProgress))
    },
    onEnterCurrentEmail: async (email) =>{
      await dispatch (actHandleEnterCurrentEmail (email))
    },
    onSwitchWaitingModal:  () => {
      dispatch (actSwitchWattingModal())
   }
  }
}

export default connect (mapStyleToProps,mapDispatchToProps)  (EnterEmailCTT)
