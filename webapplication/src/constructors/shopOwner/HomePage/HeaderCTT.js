import React, { Component } from 'react';
import {connect} from 'react-redux'
import Header from '../../../components/shopOwner/HomePage/Header'
import {actHandleLogout} from '../../../actions/LoginAction'
class HeaderCTT extends Component {
  render() {
    return (
      <div>
        <Header onLogout = {this.props.onLogout}/>
      </div>
    )
  }
};


const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogout: () => {
      dispatch(actHandleLogout())
    },
  }
}
export default connect (null,mapDispatchToProps) (HeaderCTT)
