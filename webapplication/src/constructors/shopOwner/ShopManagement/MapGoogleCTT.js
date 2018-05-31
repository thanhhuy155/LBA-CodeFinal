import React, { Component } from 'react';
import {connect} from 'react-redux'
import Maps from '../../../components/shopOwner/ShopManagement/MapGoogle'
class MapGoogleCTT extends Component {
  render() {
    const {dataShopDetail} = this.props
    var Store_Longitude = null
    var Store_Latitude = null
    if (dataShopDetail)
    {
      Store_Longitude= dataShopDetail.data.store_Details.Store_Longitude
      Store_Latitude = dataShopDetail.data.store_Details.Store_Latitude
      return (
        <Maps 
          Store_Latitude = {Store_Latitude}
          Store_Longitude = {Store_Longitude}
        />
    )
    }
    else {
      return (
        <p>Loading....</p>
      )
    }
    
  }
};

const mapStyleToProps = (state) => {
  return {
    dataShopDetail: state.handleGetShopDetail
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}

export default connect (mapStyleToProps,null) (MapGoogleCTT)
