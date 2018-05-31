import React, { Component } from 'react';
import AdminNarbar from '../../components/admin/AdminNarbar'
import { connect } from 'react-redux'
import {actHandleLogout} from '../../actions/LoginAction'

class AdminNarbarCTT extends Component {
    render() {
        return (
                <AdminNarbar onLogout = {this.props.onLogout}/>
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



export default connect(null, mapDispatchToProps)(AdminNarbarCTT)
