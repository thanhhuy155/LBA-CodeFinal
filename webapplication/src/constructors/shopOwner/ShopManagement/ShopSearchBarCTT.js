import React, { Component } from 'react';
import {connect} from 'react-redux'
import ShopSearchBar from '../../../components/shopOwner/ShopManagement/ShopSearchBar'
import {actHandleSortShop} from '../../../actions/ShopManagementAction'
class ShopSearchBarCTT extends Component {
  render() {
    return (
      <ShopSearchBar /> 
    )
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSortShop : () =>{
      dispatch 
    }
  }
}
export default connect (null,null) (ShopSearchBarCTT)
