import React, { Component } from 'react';
import {checkLengthInput, checkOnlyNumber, checkSpecialLetter} from '../../../constraints/InputValidation'
export default class Information extends Component {

    constructor(props) {
        super(props)
        {
            this.state = {
                txtFirstName: '',
                txtLastName: '',
                txtPassword: '',
                txtVerifyPassword: '',
                txtPhoneNumber: '',
                txtdayOfBirth: '',
                rbGender: 0,
                txtBussinessStyle:0,
                formError:{
                    txtFirstName: '',
                    txtLastName: '',
                    txtPhoneNumber: '',
                    txtdayOfBirth: '',
                }
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

    handleSubmitForInformation = (event) => {
        event.preventDefault(); // Ngan mat o
        const { txtFirstName, txtLastName, txtBussinessStyle, txtPhoneNumber, rbGender } = this.state
        this.setState({
            formError:
                {
                    ...this.state.formError,
                    txtFirstName: checkLengthInput(txtFirstName, 2),
                    txtLastName: checkLengthInput(txtLastName, 2),
                    txtPhoneNumber: checkOnlyNumber(txtPhoneNumber)
                }
        },
            async () => {
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
                    this.props.onSwitchWaitingModal();
                    await this.props.onHandleUpdateInformation (txtFirstName, txtLastName, txtBussinessStyle, txtPhoneNumber, rbGender )
                    if (this.props.dataUpdateInformation !==null)
                        {
                            if (this.props.dataUpdateInformation.message.success ===true)
                                await this.props.onNextProgressBar(2)
                            else
                                alert (this.props.dataUpdateInformation.message.error)
                        }
                    this.props.onSwitchWaitingModal();
                    //this.props.onNextProgressBar(2)
                }
            }
        )
        
        
    }

    render() {

        const { positionProgressBar, onNextProgressBar } = this.props
        return (
            <div style={{ display: positionProgressBar === 1 ? '' : 'none' }}>
                <form onSubmit={this.handleSubmitForInformation}>
                    <legend class = "text-center">
                        <strong>
                            Enter your information
                        </strong>
                    </legend>

                    <div class="form-group">                   
                        <label class="">First Name</label>
                        <input
                            name="txtFirstName"
                            value={this.state.txtFirstName}
                            onChange={this.handleChange}
                            type="text"
                            class="form-control"
                            placeholder="First Name" />
                        <p class ="text-danger">{this.state.formError.txtFirstName}</p>
                    </div>

                    <div class="form-group">
                        <label class="">Last Name</label>
                        <input
                            name="txtLastName"
                            value={this.state.txtLastName}
                            onChange={this.handleChange}
                            type="text"
                            class="form-control"
                            placeholder="Last name" />
                        <p class ="text-danger">{this.state.formError.txtLastName}</p>
                    </div>

                    <div class="form-group">
                        <label class="">Phone Number</label>
                        <input
                            name="txtPhoneNumber"
                            value={this.state.txtPhoneNumber}
                            onChange={this.handleChange}
                            type="text"
                            class="form-control"
                            placeholder="Phone Number" />
                        <p class ="text-danger">{this.state.formError.txtPhoneNumber}</p>
                    </div>

                    <div class="form-group">
                        <label for="">Select Type of Shop: </label>
                        <select onChange={this.handleChange} name={'txtBussinessStyle'} id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                            <option selected={true} value="0">Personal</option>
                            <option value="1">Enterprise</option>
                        </select>
                    </div>
                    <div class="form-group" >
                        <label style = {{marginRight: 10}}class="">Gender: </label>
                        <input 
                            type="radio" 
                            name="rbGender" 
                            value={0}
                            onChange = {this.handleChange}/> Male&nbsp;
                        <input 
                            type="radio" 
                            name="rbGender" 
                            value={1}
                            onChange = {this.handleChange}/> Female
                    </div>
                    <button type="submit" class="btn btn-primary">Next</button>
                </form>
            </div>
        )
    }
};
