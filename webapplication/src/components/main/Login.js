import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {checkEmail,checkLengthInput} from '../../constraints/InputValidation'
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            txtEmail: '',
            txtPassword: '',
            formError: {
                txtEmail: '',
                txtPassword: '',
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

    handleSubmit = (event) => {
        event.preventDefault(); // Ngan mat o
        const { txtEmail,txtPassword } = this.state
        this.setState({
            formError:
                {
                    ...this.state.formError,
                    txtEmail: checkEmail (txtEmail),
                    txtPassword: checkLengthInput(txtPassword,8),
                }
        },
            async ()  => {
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
                    await this.props.onLogin (txtEmail, txtPassword)
                    const {dataLogin} = this.props
                    if (dataLogin !== null)
                        {
                            if (dataLogin.message.success)
                            {
                                if (dataLogin.data.Group_Accounts_Id ===2)
                                    window.location.replace("/s")
                                else if (dataLogin.data.Group_Accounts_Id ===1)
                                    window.location.replace("/a")
                            }
                            else{
                                alert (dataLogin.message.error)
                            }
                            
                        }
                    this.props.onSwitchWaitingModal();
                }
            }
        )
    }
    render() {
        const { numberSwitch } = this.props
        return (
            <form onSubmit ={this.handleSubmit}>
                <legend class="text-center" 
                    style={{fontSize:35}}><strong>Login To Your Site</strong></legend>
                <div class="form-group">
                    <label for="">Email</label>
                    <input 
                        name="txtEmail"
                        value={this.state.txtEmail}
                        onChange={this.handleChange}
                        type="text" 
                        class="form-control" 
                        placeholder="Enter Username or Email" 
                        />
                    <p class ={'text-danger'}>{this.state.formError.txtEmail}</p>
                </div>

                <div class="form-group">
                    <label for="">Password</label>
                    <input
                        name="txtPassword"
                        value={this.state.txtPassword}
                        onChange={this.handleChange}
                        type="password" 
                        class="form-control" 
                        placeholder="Enter Password" />
                    <p class ={"text-danger"}>{this.state.formError.txtPassword}</p>
                </div>

                <Link to="/w/EditPassword">Forget Account</Link> <br /> <br />
                <button type="submit" class="btn btn-primary">Login</button>
            </form>

        )
    }
};
