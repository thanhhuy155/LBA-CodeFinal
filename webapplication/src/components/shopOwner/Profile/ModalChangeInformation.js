import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import { checkOnlyLength, checkOnlyNumber } from '../../../constraints/InputValidation'
export default class ModalChangeInformation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            txtFirstName: '',
            txtLastName: '',
            txtPhoneNumber: '',
            txtGender: 1,
            formError:{
                txtFirstName: '',
                txtLastName: '',
                txtPhoneNumber: '',
            }
        }
    }
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        })
    }

    _handleSubmit = (e) => {
        const { txtFirstName, txtLastName, txtPhoneNumber , txtGender
        } = this.state
        this.setState({
            formError:
                {
                    txtFirstName: checkOnlyLength (txtFirstName,1),
                    txtLastName: checkOnlyLength(txtLastName,1),
                    txtPhoneNumber: checkOnlyNumber(txtPhoneNumber,null,null),
                }
        },
            () => {
                var formError = Object.values(this.state.formError)
                let isOkay = false
                for (let i = 0; i < formError.length; i++) {
                    if (formError[i] === '')
                        isOkay = true
                    else {
                        isOkay = false
                        break
                    }
                }
                if (isOkay) {
                    console.log(JSON.stringify (this.state))
                }
            }
        )
    }

    render() {
        return (
            <Modal show={this.props.isOpen}>
                <Modal.Header>
                    <button onClick={() => this.props.switchClose()} type="button" class="close">&times;</button>
                    <center><h4 class="modal-title"><strong>Change Information</strong></h4></center>
                </Modal.Header>
                <Modal.Body>

                    <form>
                        <div class="form-group">
                            <label for="">First Name: </label>
                            <input 
                                onChange = {this.handleChange} 
                                type="text" class="form-control" 
                                name= {'txtFirstName'} 
                                value= {this.state.txtFirstName} placeholder="Input field" />
                            <p class={'text-danger'}>{this.state.formError.txtPhoneNumber}</p>
                        </div>

                        <div class="form-group">
                            <label for="">Last Name: </label>
                            <input 
                                onChange = {this.handleChange} 
                                type="text" class="form-control" 
                                placeholder="Input field" 
                                name= {'txtLastName'}
                                value = {this.state.txtLastName}
                                />
                            <p class={'text-danger'}>{this.state.formError.txtPhoneNumber}</p>
                        </div>

                        <div class="form-group">
                            <label for="">Phone Number: </label>
                            <input 
                                onChange = {this.handleChange} 
                                class="form-control" 
                                rows="3" 
                                placeholder="Input field"
                                name = {'txtPhoneNumber'}
                                value = {this.state.txtPhoneNumber}
                                />
                            <p class={'text-danger'}>{this.state.formError.txtPhoneNumber}</p>
                        </div>

                        <div class="form-group">
                            <label >Gender </label>
                            <select onChange = {this.handleChange} name={'txtGender'} id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                                <option onChange = {this.handleChange} selected={true} value="1">Male</option>
                                <option onChange = {this.handleChange} value="0">Female</option>
                            </select>
                        </div>


                    </form>

                </Modal.Body>

                <Modal.Footer>

                    <button onClick = {()=>this._handleSubmit()} type="button" class="btn btn-success">Change Information</button>
                    <button onClick={() => this.props.switchClose()} type="button" class="btn btn-danger">Close</button>

                </Modal.Footer>
            </Modal>
        )
    }
};
