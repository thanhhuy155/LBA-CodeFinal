import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
export default class ModalAddAdmin extends Component {


    render() {
        return (
            <Modal show={this.props.isOpen}>
                <Modal.Header>
                    <button onClick={() => this.props.switchClose()} type="button" class="close">&times;</button>
                    <center><h4 class="modal-title"><strong>Create Admin Account</strong></h4></center>
                </Modal.Header>
                <Modal.Body>

                    <form>
                        <div class="form-group">
                            <label for="">Email: </label>
                            <input
                                type="text" class="form-control"
                                name={'txtOldPassword'}
                            />
                        </div>
                        <div class="form-group">
                            <label for="">Full Name: </label>
                            <input 
                                type="text" class="form-control" 
                                name= {'txtOldPassword'} 
                                 />
                        </div>
                        <div class="form-group">
                            <label for="">Password: </label>
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
                        <div class="form-group">
                            <label >Gender </label>
                            <select id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                                <option selected={true} value="1">Male</option>
                                <option value="0">Female</option>
                            </select>
                        </div>


                

                    </form>

                </Modal.Body>

                <Modal.Footer>

                    {/* <button onClick = {()=>this._handleSubmit()} type="button" class="btn btn-success">Change Password</button> */}
                    <button onClick={() => this.props.switchClose()} type="button" class="btn btn-success">Create Account</button>
                    <button onClick={() => this.props.switchClose()} type="button" class="btn btn-danger">Close</button>

                </Modal.Footer>
            </Modal>
        )
    }
};

