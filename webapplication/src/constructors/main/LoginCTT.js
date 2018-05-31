import React, { Component } from 'react';
import Login from '../../components/main/Login'
import { actHandleLoginRequest } from '../../actions/LoginAction'
import { connect } from 'react-redux'
import { actSwitchWattingModal } from '../../actions/MainAction'
class LoginCTT extends Component {
  render() {
    return (
      <Login 
        onLogin={this.props.onLogin} 
        dataLogin={this.props.dataLogin}
        onSwitchWaitingModal = {this.props.onSwitchWaitingModal}
        />
    )
  }
};

const mapStyleToProps = (state) => {
  return {
    dataLogin: state.handleLogin
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogin: async (user, password) => {
      await dispatch(actHandleLoginRequest(user, password))
    },
    onSwitchWaitingModal:  () => {
       dispatch (actSwitchWattingModal())
    }
  }
}


export default connect(mapStyleToProps, mapDispatchToProps)(LoginCTT)
