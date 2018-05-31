import React, { Component } from 'react';

export const checkEmail = (email) => {
    if (email.toString().length === 0) {
        return 'The field cannot be empty.'
    }
    else if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        return ''
    }
    return 'Email is not valid'
}

export const checkLengthInput = (context, length) => {
    if (context.match(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi))
        return 'The Field is not contained special words'
    else if (context.toString().trim().length === 0) {
        return 'The field cannot be empty.'
    }
    else if (context.toString().trim().length < length) {
        return `The length must be more than ${length}.`
    }
    return ''
}

export const checkOnlyLength = (context, length) => {
    if (context.toString().trim().length === 0) {
        return 'The field cannot be empty.'
    }
    else if (context.toString().trim().length < length) {
        return `The length must be more than ${length}.`
    }
    return ''
}

export const checkTimeFormat = (context) => {
    if (context.toString().length === 0) {
        return 'The field cannot be empty.'
    }
    return ''
}


export const checkOnlyNumber = (context, min, max) => {
    if (context.toString().length === 0) {
        return 'The field cannot be empty.'
    }
    else if (!context.toString().match(/^[0-9]+$/)) {
        return 'The field must be number and over 0'
    }
    else if (min !== null || max !== null) {
        if (min !== null && Number (context) <= Number (min))
            {
                return 'The field must be > ' + min
            }
        else if (max !== null && context >= max)
            {
                return 'The field must be < ' + max
            }
    }
    return ''
}

export const checkVerifyPassword = (first, last) => {
    if (last.toString().length === 0) {
        return 'The field cannot be empty.'
    }
    else if (first !== last) {
        return 'Verify password is not the same as password'
    }
    return ''
}

export const checkStartDate = (StartDate) => {
    if (StartDate === '')
        return 'Start date is not empty'
    else
    {
        var startDate = new Date (StartDate)
        var today = new Date();
        var reToday = new Date ((today.getMonth()+1) +'/'+today.getDate () + '/' +today.getFullYear())
        if (startDate < reToday ) {
            return 'Start date is over today'
        }
    }
    return ''
}

export const checkEndDate = (StartDate, EndDate) => {
    if (EndDate === '')
        return 'This field is not empty'
    else if (StartDate === '')
        return 'Start date is not empty'
    else if (EndDate < StartDate)
        return 'End date is over start today'
    return ''
}
