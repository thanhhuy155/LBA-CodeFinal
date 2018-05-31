import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import { checkOnlyLength, checkOnlyNumber } from '../../../../constraints/InputValidation'
export default class ModalChangePassAdmin extends Component {


    render() {
        return (
            <Modal show={this.props.isOpen}>
                <Modal.Header>
                    <button onClick={() => this.props.switchClose()} type="button" class="close">&times;</button>
                    <center><h4 class="modal-title"><strong>Change Password</strong></h4></center>
                </Modal.Header>
                <Modal.Body>

                    <form>
                        <div class="form-group">
                            <label for="">Old Password: </label>
                            <input 
                                type="password" class="form-control" 
                                name= {'txtOldPassword'} 
                                 />
                        </div>
                        <div class="form-group">
                            <label for="">New Password: </label>
                            <input 
                                type="password" class="form-control" 
                                name= {'txtOldPassword'} 
                                 />
                        </div>
                        <div class="form-group">
                            <label for="">Confirm Password: </label>
                            <input 
                                type="password" class="form-control" 
                                name= {'txtOldPassword'} 
                                 />
                        </div>

                

                    </form>

                </Modal.Body>

                <Modal.Footer>

                    {/* <button onClick = {()=>this._handleSubmit()} type="button" class="btn btn-success">Change Password</button> */}
                    <button onClick={() => this.props.switchClose()} type="button" class="btn btn-success">Change Password</button>
                    <button onClick={() => this.props.switchClose()} type="button" class="btn btn-danger">Close</button>

                </Modal.Footer>
            </Modal>
        )
    }
};

