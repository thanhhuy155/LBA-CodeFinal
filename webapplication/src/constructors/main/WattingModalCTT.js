import React, { Component } from 'react'
import {connect} from 'react-redux'
import WaittingModal from '../../components/main/WaitingModal'
import {actSwitchWattingModal} from '../../actions/MainAction'
class WaittingModalCTT extends Component {
  render() {
    const {isOpenWattingModal, onWaittingModal} = this.props
    return (
      <WaittingModal 
        isOpenWattingModal= {isOpenWattingModal}
        onWaittingModal = {onWaittingModal}
      />
    )
  }
}

const mapStyleToProps = (state) => {
    return {
      isOpenWattingModal: state.handleSwitchWattingToken
    }
  }
  
  const mapDispatchToProps = (dispatch, props) => {
    return {
        onWaittingModal: async () => {
            await dispatch(actSwitchWattingModal())
        }
    }
  }
export default connect (mapStyleToProps,mapDispatchToProps) (WaittingModalCTT)
