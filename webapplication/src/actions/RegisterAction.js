import React, { Component } from 'react'
import * as Types from '../constraints/RegisterCST'
import callAPI from '../utils/apiCaller'

export const actSaveAccountRegister = ( data ) => {
    return {
        type: Types.REGISTER_ACCOUNT,
        data
    }
}

export const actHandleAccountRegister = (email, password) => {
    return (dispatch) => {
        return callAPI('AccountRegister', 'POST', {
            Username: email,
            Password: password
        }).then(async res => {
            await dispatch(actSaveAccountRegister(res));
        })
    }
}

export const actSaveVerifyAccount = ( data ) => {
    return {
        type: Types.VERIFY_ACCOUNT,
        data
    }
}

export const actHandleVerifyAccount = (Username, Account_Verification) =>{
    return (dispatch) =>{
        return callAPI ('VerifyAccountRegister', 'POST',{
            Username: Username,
            Account_VerificationCode: Account_Verification
        }).then (async res=>{
            await dispatch (actSaveVerifyAccount (res))
            await localStorage.setItem('ProcessingEmail', Username); 
        } )
    }
}

export const actSaveUpdateInformation = (data) => {
    return {
        type: Types.STORE_OWNER_REGISTER,
        data
    }
}

export const actHandleUpdateInformation = (Username, Owner_FirstName , Owner_LastName , Owner_BusinessType, Owner_PhoneNumber, Owner_Gender) =>{
    return (dispatch) =>{
        return callAPI ('OwnerRegister', 'POST',{
            Username: Username , 
            Owner_FirstName: Owner_FirstName , 
            Owner_LastName: Owner_LastName , 
            Owner_BusinessType: Owner_BusinessType, 
            Owner_PhoneNumber: Owner_PhoneNumber, 
            Owner_Gender: Owner_Gender
        }).then (async res=>{
            await dispatch (actSaveUpdateInformation (res))
        } )
    }
}
