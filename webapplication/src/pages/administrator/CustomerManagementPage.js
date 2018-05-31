import React, { Component } from 'react';
import AdminListAdminCTT from '../../constructors/admin/AdminListAdminCTT';
import SearchbarCTT from '../../constructors/admin/Accounts/SearchbarCTT';
import CustomerItem from '../../components/admin/Accounts/CustomerItem/CustomerItem';
import TaskSearchControl from '../../components/admin/Accounts/CustomerItem/TaskSearchControl';
import CustomerList from '../../components/admin/Accounts/CustomerList/CustomerList';
import axios from 'axios';
import '../../components/admin/adminstyle.css';
import { connect } from 'react-redux';
import callAPI from './../../utils/apiCaller';
import { actFeatchCustomerRequest, actDeleteCustomerRequest } from '../../actions/index';
import * as actions from '../../actions/index';
class CustomerManagementPage extends Component {
    componentWillMount() {
        this.props.fetchAllCustomers();
    }
    render() {
        var { customers } = this.props;
        return (
            <div>
            {/* <TaskSearchControl/> */}
                <div className="col-xs-10 col-sm-10 col-md-9 col-lg-9" style= {{paddingTop:50}}>
                {/* <Link to="/product/add" className="btn btn-info mb-10">Add product</Link> */}
                <CustomerList>
                    {this.showCustomers(customers)}
                </CustomerList>
            </div>
            </div>
        );
    }
    onDelete = (id) => {
        this.props.onDeleteCustomer(id);
        // console.log(id);

    }

    showCustomers(customers) {

        var result = null;
        if (customers) {
            if (customers.length > 0) {
                result = customers.map((customer, index) => {
                    return (
                        <CustomerItem
                            key={index}
                            customer={customer}
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
        customers: state.customers,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCustomers: () => {
            dispatch(actFeatchCustomerRequest())
        },
        onDeleteCustomer: (Customer_ID) => {
            dispatch(actDeleteCustomerRequest(Customer_ID))
        }
    }
}
export default connect(mapSateToProps, mapDispatchToProps)(CustomerManagementPage);