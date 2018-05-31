import React, { Component } from 'react';
import Welcome from '../../components/main/Welcome'

import {connect} from 'react-redux'
class WelcomeCTT extends Component {
  render() {
    return (
      <Welcome numberSwitch={this.props.numberSwitch}/>
    )
  }
};

const mapStyleToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
      
  }
}
export default connect (mapStyleToProps,mapDispatchToProps)(WelcomeCTT)
