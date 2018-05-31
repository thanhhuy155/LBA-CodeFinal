import React, { Component } from 'react';
import CustomerAccounts from '../../../components/admin/Accounts/AccountList/CustomerAccounts'
import { connect } from 'react-redux'
class CustomerListCTT extends Component {
    render() {
        return (
            <CustomerAccounts />
        )
    }
};

const mapStyleToProps = (state) => {
    return {
    }
}

export default connect(mapStyleToProps, null)(CustomerListCTT)
