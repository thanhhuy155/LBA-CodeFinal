import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { checkEmail, checkLengthInput, checkVerifyPassword } from '../../../constraints/InputValidation'
export default class Verification extends Component {

    constructor(props) {
        super(props)
        {
            this.state = {
                txtEmail: '',
                txtVerificationCode: '',
                txtVerifyPassword: '',
                txtPassword: '',
                formError: {
                    txtEmail: '',
                    txtVerificationCode: '',
                    txtPassword: '',
                    txtVerifyPassword: '',
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

    handleSubmitForEmail = (event) => {
        event.preventDefault(); // Ngan mat o
        const { txtEmail, txtPassword, txtVerifyPassword} = this.state
        this.setState({
            formError:
                {
                    ...this.state.formError,
                    txtEmail: checkEmail (txtEmail),
                    txtPassword: checkLengthInput(txtPassword, 8),
                    txtVerifyPassword: checkVerifyPassword (txtPassword,txtVerifyPassword),
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
                    await this.props.onHandleAccountRegister (txtEmail, txtPassword)
                    // alert (JSON.stringify (this.props.dataAccountRegister))
                    if (this.props.dataAccountRegister !==null)
                        {
                            if (this.props.dataAccountRegister.message.success ===true)
                                await this.props.onNextProgressBar(0)
                            else
                                alert (this.props.dataAccountRegister.message.error)
                        }
                    this.props.onSwitchWaitingModal();
                }
            }
        )    
    }

    handleSubmitForRegisterationCode = (event) => {
        event.preventDefault();
        const { txtVerificationCode } = this.state
        this.setState({
            formError:
                {
                    ...this.state.formError,
                    txtVerificationCode: checkLengthInput(txtVerificationCode, 5)
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
                    await this.props.onHandleAccountVerification (this.state.txtEmail, txtVerificationCode)
                    if (this.props.dataAccountVerification !==null)
                        {
                            if (this.props.dataAccountVerification.message.success ===true)
                                await this.props.onNextProgressBar(1)
                            else
                                alert (this.props.dataAccountVerification.message.error)
                        }
                    this.props.onSwitchWaitingModal();
                }
            }
        )
    }

    render() {
        const { positionProgressBar } = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmitForEmail} style={{ display: positionProgressBar === -1 ? '' : 'none' }}>
                    <div class="form-group">
                        <label>Enter your Email and we will send you a code</label>
                        <span>
                            <input
                                name="txtEmail"
                                value={this.state.txtEmail}
                                onChange={this.handleChange}
                                type="text"
                                class="form-control"
                                placeholder="Email"
                            />
                            <p class="text-danger">{this.state.formError.txtEmail}</p>
                        </span>
                    </div>

                    <div class="form-group">
                        <label class="">Password</label>
                        <input
                            name="txtPassword"
                            value={this.state.txtPassword}
                            onChange={this.handleChange}
                            type="Password"
                            class="form-control"
                            placeholder="Password" />
                        <p class ="text-danger">{this.state.formError.txtPassword}</p>
                    </div>

                    <div class="form-group">
                        <label class="">Verify Password</label>
                        <input
                            name="txtVerifyPassword"
                            value={this.state.txtVerifyPassword}
                            onChange={this.handleChange}
                            type="Password"
                            class="form-control"
                            placeholder="Verify Password" />
                        <p class ="text-danger">{this.state.formError.txtVerifyPassword}</p>
                    </div>

                    <button type="submit" class="btn btn-primary">Next</button>
                </form>

                <div style={{ display: positionProgressBar === 0 ? '' : 'none' }}>
                    <p>A code have just send for you. Please Check your email.</p>
                    <p>Your code will be expirated after closing this website.</p>
                    <p>Please don't close this website</p>
                    <form onSubmit={this.handleSubmitForRegisterationCode}>
                        <div class="form-group">
                            <span>
                                <input
                                    name="txtVerificationCode"
                                    value={this.state.txtVerificationCode}
                                    onChange={this.handleChange}
                                    type="text"
                                    class="form-control"
                                    placeholder="Verification Code" />
                                <p class= "text-danger">{this.state.formError.txtVerificationCode}</p>
                            </span>
                        </div>

                        <button
                            onClick={() => { this.props.onNextProgressBar(-1); this.setState() }}
                            type="button" class="btn btn-info">Re-send code</button>

                        <button type="submit" class="btn btn-primary">Next</button>
                    </form>
                </div>
            </div>
        )
    }
};

