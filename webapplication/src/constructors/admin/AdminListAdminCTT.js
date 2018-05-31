import React, { Component } from 'react';
import AdminAccounts from '../../components/admin/Accounts/AccountData/AdminData' ;
import { connect } from 'react-redux'
import '../../components/admin/adminstyle.css'
class AdminListAdmin extends Component {
    render() {
        return (
                <AdminAccounts />
        )
    }
};
const mapStyleToProps = (state) => {
    return {
    }
}
export default connect(mapStyleToProps, null)(AdminListAdmin)
