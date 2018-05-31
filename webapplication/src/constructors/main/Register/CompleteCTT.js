import React, { Component } from 'react';
import {connect} from 'react-redux'
import Complete from '../../../components/main/Register/Complete'
import {actRegisterProgress} from '../../../actions/LoginAction'
class CompleteCTT extends Component {
  render() {
    const {positionProgressBar,onNextProgressBar} = this.props
    return (
      <Complete onNextProgressBar= {onNextProgressBar} positionProgressBar={positionProgressBar}/>
    )
  }
};

const mapStyleToProps = (state) => {
  return {
    positionProgressBar: state.handleProgressBar
  }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onNextProgressBar: (numberProgressBar) => {
            dispatch(actRegisterProgress(numberProgressBar))
        }
    }
}
export default connect (mapStyleToProps,mapDispatchToProps)(CompleteCTT)
