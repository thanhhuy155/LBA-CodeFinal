import React, { Component } from 'react';
import axios from 'axios'
const SelectShopPostion = (Street) =>{
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${Street},${'Danang'}&key=AIzaSyD1SW7EHr5q8mBPSVahIvrSHw3rBpyQ2z8`).then(res=>{
        if (res.data.results.length ===0)
            return {
                error: true
            }
        else
            return res.data.results[0].geometry.location
    }).catch (err=> {
        error: true
    })
}

export default SelectShopPostion
