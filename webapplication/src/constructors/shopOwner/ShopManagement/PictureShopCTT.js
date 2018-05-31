import React, { Component } from 'react';
import {connect} from 'react-redux'
import PictureShop from '../../../components/shopOwner/ShopManagement/PictureShop'
class PictureShopCTT extends Component {
  _mapStringToArray (string){
    return string.split (',')
  }
  render() {
    const {dataShopDetail} = this.props
    var imageArray = []
    if (dataShopDetail)
    {
      if (dataShopDetail.data.store_Details.Store_ImageList.length !==0)
        imageArray = this._mapStringToArray (dataShopDetail.data.store_Details.Store_ImageList)
    }
    return (
      <PictureShop imageArray = {imageArray} avatar = {dataShopDetail.data.store_Details.Store_ImageLink}/>
    )
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
export default connect (mapStyleToProps, null) (PictureShopCTT)
