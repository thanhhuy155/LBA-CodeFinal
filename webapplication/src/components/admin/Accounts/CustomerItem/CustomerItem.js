import React, { Component,Fragment } from 'react';
import {handleSplitDate, formatDateTime} from './../../../../constraints/HandleDate';
import {Modal} from 'react-bootstrap'
// import {Link} from 'react-router-dom';
class CustomerItem extends Component {
        constructor (props) {
        super (props)
        this.state = {
            isOpenModalDeleteShop: false
        }
    }
    onDelete = (Customer_ID) => {
            this.props.onDelete(Customer_ID);
    }
    render() {
        var { customer, index } = this.props;
        return (
            <Fragment>
                            <Modal show = {this.state.isOpenModalDeleteShop} >
                    <Modal.Header style = {{backgroundColor:'#f9c882'}}>
                        <p style = {{fontSize:20}}><center><strong>Delete Customer</strong></center></p>
                    </Modal.Header>

                    <Modal.Body>
                    <center>
                        <p><strong>{`Are you sure you want to delete customer "${customer.Customer_FirstName + ' ' + customer.Customer_LastName}" ?`}</strong></p>
                    </center>
                    </Modal.Body>

                    <Modal.Footer>
                        <button 
                            onClick = {()=> this.setState ({isOpenModalDeleteShop:false})} 
                            type="button" 
                            class="btn btn-default">Cancel</button>
                        <button
                            onClick = {
                            () => {
                                this.onDelete(customer.Customer_ID)
                                this.setState ({isOpenModalDeleteShop:false})}
                            }
                            type="button" 
                            class="btn btn-danger">Delete</button>
                    </Modal.Footer>
                </Modal>
            <tr>
                <td  style = {{textAlign: 'center'}}>{index + 1}</td>
                <td style = {{display : 'none'}}> {customer.Customer_ID } </td>
                <td style = {{paddingLeft:30}}>{customer.Customer_FirstName + ' ' + customer.Customer_LastName}</td>
                <td style = {{paddingLeft:30,display : 'none'}} >{customer.Username}</td>
                <td style = {{textAlign: 'center'}}>{formatDateTime(handleSplitDate(customer.Customer_DOB))}</td>
                <td style = {{textAlign: 'center'}}>{customer.Customer_Gender ===1? 'Male' : 'Female'}</td>            
                <td style = {{textAlign: 'center'}}>{formatDateTime(handleSplitDate(customer.Customer_Created))}</td>
                <td style = {{textAlign: 'center'}}>
                    <button type="button"
                        className="btn btn-danger  "
                        onClick={() => {this.setState ({isOpenModalDeleteShop:true})}}
                    >Delete</button>
                </td>
            </tr>
            </Fragment>
        )
    }
}
export default CustomerItem;