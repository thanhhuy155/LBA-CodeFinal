import React, { Component, Fragment} from 'react';
import {Modal} from 'react-bootstrap'
// import {Link} from 'react-router-dom';
class AdminItem extends Component {

    constructor (props) {
        super (props)
        this.state = {
            isOpenModalDeleteShop: false
        }
    }
    onDelete =(Admin_ID) =>{
        this.props.onDelete(Admin_ID);
    }
    render() {
        var {admin, index} = this.props;
        // var statusName = admin.status ? 'Availabe' : ' Not Avaiable';
        // var statusClass = admin.status ? 'warning' : 'default';
        return (
            <Fragment>
                            <Modal show = {this.state.isOpenModalDeleteShop} >
                    <Modal.Header style = {{backgroundColor:'#f9c882'}}>
                        <p style = {{fontSize:20}}><center><strong>Delete Admin</strong></center></p>
                    </Modal.Header>
                    <Modal.Body>
                    <center>
                        <p><strong>{`Are you sure you want to delete admin "${admin.Admin_Name}" ?`}</strong></p>
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
                                this.onDelete(admin.Admin_ID)
                                this.setState ({isOpenModalDeleteShop:false})}
                            }
                            type="button" 
                            class="btn btn-danger">Delete</button>
                    </Modal.Footer>
                </Modal>
            <tr>
                <td  style = {{textAlign: 'center'}}>{index +1 }</td>
                <td style = {{display : 'none'}}>{admin.Admin_ID}</td>
                <td style = {{paddingLeft:30}}>{admin.Admin_Name}</td>
                <td style = {{paddingLeft:30}}>{admin.Username}</td>
                {/* <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td> */}
                {/* <td style = {{textAlign: 'center'}}>
                    <Link to={`product/${admin.Admin_ID}/edit`}
                    className="btn btn-success" 
                        style={{ marginRight: 10 }}>Edit</Link>
                    <button type="button" 
                    className="btn btn-danger  " 
                        onClick={() => {this.setState ({isOpenModalDeleteShop:true})} }
                    >Delete</button>
                </td> */}
            </tr>
        </Fragment>
        );
    }
}
export default AdminItem;