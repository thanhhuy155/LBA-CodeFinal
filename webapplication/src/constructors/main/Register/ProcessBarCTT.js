import React, { Component } from 'react';
import {connect} from 'react-redux'
import ProcessBar from '../../../components/main/Register/ProcessBar'
import {actRegisterProgress} from '../../../actions/LoginAction'
class ProcessBarCTT extends Component {
  render() {
    const {positionProgressBar} = this.props
    return (
      <ProcessBar positionProgressBar={positionProgressBar}/>
    )
  }
};

const mapStyleToProps = (state) => {
  return {
    positionProgressBar: state.handleProgressBar
  }
}

export default connect (mapStyleToProps,null)(ProcessBarCTT)