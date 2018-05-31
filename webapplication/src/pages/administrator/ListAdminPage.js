import React, { Component } from 'react';
import AdminListAdminCTT from '../../constructors/admin/AdminListAdminCTT';
import SearchbarCTT from '../../constructors/admin/Accounts/SearchbarCTT';

import AdminItem from '../../components/admin/Accounts/AdminItem/AdminItem';
import AdminList from '../../components/admin/Accounts/AdminList/AdminList';
import axios from 'axios';
import '../../components/admin/adminstyle.css';
import { connect } from 'react-redux';
import callAPI from './../../utils/apiCaller';
import { actFetchAdminsRequest, actDeleteAdminRequest } from '../../actions/index';
class ListAdminPage extends Component {
    componentWillMount() {
        this.props.fetchAllAdmins();
    }
    // phuong thuc xoa san pham
    onDelete = (id) => {
        this.props.onDeleteAdmin(id);
        console.log(id);
    }
    render() {
        var { admins } = this.props
        return (
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" style= {{paddingTop:50}}>
                {/* <SearchbarCTT /> */}
                <AdminList>
                    {this.showAdmins(admins)}
                </AdminList>
            </div>
        );
    }
    showAdmins(admins) {
        console.log('Q', admins.length);
        var result = null;
        if (admins) {
            if (admins.length > 0) {
                result = admins.map((admin, index) => {
                    return (
                        <AdminItem
                            key={index}
                            admin={admin}
                            index={index}
                            onDelete={this.onDelete} //khai bao them ham xoa
                        />
                    )
                }
                )
            }
        }
        return result;
    }
}
const mapSateToProps = state => {
    return {
        admins: state.admins
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllAdmins: () => {
            dispatch(actFetchAdminsRequest())
        },
        onDeleteAdmin: (Admin_ID) => {
            dispatch(actDeleteAdminRequest(Admin_ID))
        }
    }
}
export default connect(mapSateToProps, mapDispatchToProps)(ListAdminPage);