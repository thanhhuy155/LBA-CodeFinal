import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actGetPaymentHistoryForShopOwner} from '../../../actions/PaymentHistoryActions'
import {formatDateTime} from '../../../constraints/HandleDate'
class BudgetManagementPage extends Component {
    componentWillMount () {
        //this.props.onGetPaymentHistory (JSON.parse (localStorage.getItem('User')).data.store_Owners_Details1.Owner_ID)
    }
    render() {
        const {dataPaymentHistory} = this.props
        return (

            <div class="container-fluid">

                <div class="row">
                    <h4><strong>Payment History</strong></h4>
                    <table class="table table-hover table-striped">
                        <thead style={{ backgroundColor: '#80CBC4' }}>
                            <tr>
                                <th>Shop</th>
                                <th>Event</th>
                                <th>Payment Fee</th>
                                <th>Payment Method</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataPaymentHistory.length===0?<tr><td>You have no data</td></tr>: dataPaymentHistory.map ((item, index) =>{
                                return (
                                    <tr>
                                        <td>Waiting</td>
                                        <td>Waiting</td>
                                        <th>{item.Payment_Fee}</th>
                                        <td>{item.Payment_Method}</td>
                                        <th>{formatDateTime (item.Payment_Created)}</th>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>

            </div>

        )
    }
};

const mapStyleToProps = (state) => {
    return {
      dataPaymentHistory: state.handleGetPaymentHistoryForShopOwner,
    }
  }
  
const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetPaymentHistory:  async (idShopOwner) => {
            await dispatch (actGetPaymentHistoryForShopOwner(idShopOwner))
        }
    }
}

export default connect (mapStyleToProps, mapDispatchToProps) (BudgetManagementPage)
