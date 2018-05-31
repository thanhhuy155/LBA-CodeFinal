import React, { Component } from 'react'
import {connect} from 'react-redux'
import {actHandleInputLocation} from '../../../actions/InputLocationActions'
import InputLocation from '../../../components/shopOwner/CreateStore/InputLocation'
class InputLocationCTT extends Component {
  render() {
    return (
      <InputLocation/>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
      onHandleInputLocation:  (address, district, lat, lng) => {
        dispatch (actHandleInputLocation(address, district, lat, lng))
     }
    }
  }

export default connect (null, mapDispatchToProps) (InputLocationCTT);
