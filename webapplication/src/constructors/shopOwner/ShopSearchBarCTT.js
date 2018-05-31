import React, { Component } from 'react';
import ShopSearchBar from '../../components/shopOwner/ShopManagement/ShopSearchBar'
import {connect} from 'react-redux'
import {actHandleSortShop} from '../../actions/ShopManagementAction'
import {actSearchShop} from '../../actions/ShopManagementAction'
class ShopSearchBarCTT extends Component {
    
    render() {
        const {onSortShop, onSearchShop, nameShopForSearching} = this.props
        return (
            <ShopSearchBar 
                onSortShop = {onSortShop}
                onSearchShop = {onSearchShop}
                nameShopForSearching = {nameShopForSearching}
            />
        )
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
    return {
        onSortShop: (sortType) => {
            dispatch(actHandleSortShop(sortType))        
        },
        onSearchShop : (nameOfSort) =>{
            dispatch (actSearchShop(nameOfSort))
          }
      
    }
  }

export default connect (mapStyleToProps,mapDispatchToProps) (ShopSearchBarCTT)

