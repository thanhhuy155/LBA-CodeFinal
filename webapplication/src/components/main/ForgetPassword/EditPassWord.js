import React, { Component } from 'react';
import { checkLengthInput, checkVerifyPassword } from '../../../constraints/InputValidation'
export default class EditPassWord extends Component {

    constructor(props) {
        super(props)
        this.state = {
            txtpassWord: '',
            txtconfirmPassWord: '',
            formError: {
                txtpassWord: '',
                txtconfirmPassWord: '',
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
        const { txtpassWord, txtconfirmPassWord } = this.state
        this.setState({
            formError:
                {
                    ...this.state.formError,
                    txtpassWord: checkLengthInput (txtpassWord,8),
                    txtconfirmPassWord:checkVerifyPassword (txtpassWord,txtconfirmPassWord)
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
                    await this.props.onEnterNewPassword (txtpassWord)
                    if (this.props.dataEnterNewPassword !==null)
                        {
                            if (this.props.dataEnterNewPassword.message.success ===true)
                                {
                                    alert ('You have just changed your password successfully')
                                    window.location.replace("/w/Login");
                                }
                            else
                                alert (this.props.dataEnterNewPassword.message.error)
                        }
                    this.props.onSwitchWaitingModal();
                }
            }
        )
        
    }

    render() {
        const { positionProgress, onNextStep } = this.props;
        return (
            <div
                style={{
                    display: positionProgress === 1 ? '' : 'none'
                }}
                class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Forget Account</h3>
                </div>
                <div class="panel-body">

                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <input
                                name="txtpassWord"
                                value={this.state.txtpassWord}
                                onChange={this.handleChange}
                                type="password"
                                class="form-control"
                                placeholder="Enter New Password" />
                            <p class ="text-danger">{this.state.formError.txtpassWord}</p>
                                
                        </div>
                        

                        <div class="form-group">
                            <input
                                name="txtconfirmPassWord"
                                value={this.state.txtconfirmPassWord}
                                onChange={this.handleChange}
                                type="password"
                                class="form-control"
                                placeholder="Verify Your Password" />
                            <p class ="text-danger">{this.state.formError.txtconfirmPassWord}</p>
                        </div>                      
                        <button type="submit" class="btn btn-primary">Change Password</button>
                    </form>

                </div>
            </div>
        )
    }
};
