import React, { Component, Fragment } from 'react';
import ModalChangeInformation from './ModalChangeInformation'
import { formatDateTime } from '../../../constraints/HandleDate'
export default class TableInformation extends Component {
    constructor (props){
        super (props)
        this.state= {
            isOpenModalChangeInformation: false
        }
    }

    _OpenModal = ()=>{
        this.setState ({isOpenModalChangeInformation:true})
    }

    _CloseModal = ()=>{
        this.setState ({isOpenModalChangeInformation:false})
    }
    render() {
        const {Owner_Created,Owner_Gender,Owner_LastName, Accounts_ID,
            Owner_BusinessType,Owner_FirstName, Owner_PhoneNumber} = JSON.parse (localStorage.getItem('User')).data.store_Owners_Details1
        return (
            <Fragment>
                <ModalChangeInformation switchClose = {this._CloseModal} isOpen = {this.state.isOpenModalChangeInformation}/>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td colspan = "6" class = "success"> <center><strong>Your Profile</strong></center></td>
                                </tr>    
                                <tr>
                                    <td class="col-xd-2 col-md-4"><strong>First Name:</strong></td>
                                    <td class="col-xd-2 col-md-8">{Owner_FirstName}</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-4"><strong>Last Name:</strong></td>
                                    <td class="col-xd-2 col-md-8">{Owner_LastName}</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-4"><strong>Business Type:</strong></td>
                                    <td class="col-xd-2 col-md-8">{Owner_BusinessType===0?'Personnal':'Enterprise'}</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-2"><strong>Date of participation:</strong></td>
                                    <td class="col-xd-2 col-md-10">{formatDateTime (Owner_Created)}</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-2"><strong>Phone Number:</strong></td>
                                    <td class="col-xd-2 col-md-10">{Owner_PhoneNumber}</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-2"><strong>Gender:</strong></td>
                                    <td class="col-xd-2 col-md-10">{Owner_Gender===1?'Male':'Female'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        )
    }
};
