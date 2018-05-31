import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ShopCard from '../../components/shopOwner/ShopManagement/ShopCard'
import ignoreVietnamese from '../../constraints/IgnoreVietnamese'
import Waiting from '../../components/Waiting'
class ShopsCTT extends Component {
  render() {
    const {dataShops, sortType, nameShopForSearching} = this.props
    if (dataShops)
    {
      if (dataShops.message.success)
        {
          
          var shopArray = dataShops.data.storeDetailsManagementViewModel
          if (nameShopForSearching.trim().length >0){
            shopArray = shopArray.filter ((item) => ignoreVietnamese (item.Store_Name.trim().toUpperCase()).includes (ignoreVietnamese (nameShopForSearching.toUpperCase())))
          }

          if (Number (sortType) ===2)
          {
            shopArray= shopArray.filter ((item) => item.Store_Status===0)
          }
          else if (Number (sortType) ===3)
          {
            shopArray = shopArray.filter ((item) => item.Store_Status===1)
          }
          return shopArray.length ===0 ? (<div class="alert alert-danger">
          <strong>We have not found any shops</strong>
          </div>):shopArray.map((item,index)=>{
            return (<Link to={`/s/StoreDetailPage/${item.Store_ID}`}>
                      <ShopCard dataShop = {item}/>
                    </Link>)
          })
        }
      else {
        return (<p>{dataShops.message.error}</p>) 
      }
    }
    else{
      return (<Waiting/>)
    }
  }
};

const mapStyleToProps = (state) => {
  return {
    dataShops: state.handleGetStores,
    sortType: state.handleSortShop,
    nameShopForSearching : state.handleSearchShop
  }
}

const mapDispatchToProps = (dispatch, props) => {
  
}


export default connect (mapStyleToProps,null) (ShopsCTT)
