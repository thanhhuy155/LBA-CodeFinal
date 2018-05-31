    import React, { Component,Fragment } from 'react';
    import {Modal} from 'react-bootstrap'
// import {Link} from 'react-router-dom';
class ShopOwnerItem extends Component {
            constructor (props) {
        super (props)
        this.state = {
            isOpenModalDeleteShop: false
        }
    }
    onDelete = (Owner_ID) => {

            this.props.onDelete(Owner_ID);
    }
    render() {
        var { shopowner, index } = this.props;
        // var statusName = admin.status ? 'Availabe' : ' Not Avaiable';
         var statusClass = shopowner.Owner_BusinessType === 1 ? 'warning' : 'success';
        return (
            <Fragment>
                            <Modal show = {this.state.isOpenModalDeleteShop} >
                    <Modal.Header style = {{backgroundColor:'#f9c882'}}>
                        <p style = {{fontSize:20}}><center><strong>Delete Customer</strong></center></p>
                    </Modal.Header>

                    <Modal.Body>
                       <center> <p><strong>{`Are you sure you want to delete shop owner "${shopowner.Owner_FirstName + ' ' + shopowner.Owner_LastName}" ?`}</strong></p></center>
                    </Modal.Body>

                    <Modal.Footer>
                        <button 
                            onClick = {()=> this.setState ({isOpenModalDeleteShop:false})} 
                            type="button" 
                            class="btn btn-default">Cancel</button>
                        <button
                            onClick = {
                            () => {
                                this.onDelete(shopowner.Owner_ID)
                                this.setState ({isOpenModalDeleteShop:false})}
                            }
                            type="button" 
                            class="btn btn-danger">Delete</button>
                    </Modal.Footer>
                </Modal>
            <tr>
                <td>{index +1}</td>
                <td style = {{display : 'none'}}>{shopowner.Owner_ID}</td>
                <td style = {{paddingLeft:30}}>{shopowner.Owner_FirstName + ' ' + shopowner.Owner_LastName}</td>
                <td style = {{paddingLeft:30}}>{shopowner.Owner_PhoneNumber}</td>
                <td style = {{paddingLeft:30}}>{shopowner.Username}</td>
                <td style={{ textAlign: 'center' }}><span className={`label label-${statusClass}`} style = {{display : 'inline-block',width:80}}>{shopowner.Owner_BusinessType ===1? 'Enterprise' : 'Personal'}</span> </td>
                <td style={{ textAlign: 'center' }}>
                    {/* <button type="button"
                        className="btn btn-sm btn-warning  "
                    >Block</button> */}
                    <button type="button" style={{ marginLeft: 5 }}
                        className="btn btn-sm btn-danger  "
                        onClick={() => {this.setState ({isOpenModalDeleteShop:true})}}
                    >Delete</button></td>
            </tr>
            </Fragment>
        );
    }
}
export default ShopOwnerItem;