import React, { Component } from 'react';
import { connect } from 'react-redux'
import ShopSearchBarAdmin from '../../../components/admin/Accounts/ShopItem/ShopSearchBarAdmin'
import {actSortShopForAdmin} from '../../../actions/SortShopForAdminAction'
class ShopSearchBarCTT extends Component {
    render() {
        return (
            <ShopSearchBarAdmin 
                onSortShop = {this.props.onSortShop}
            />
        )
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSortShop: (sortNumber) => {
            dispatch(actSortShopForAdmin(sortNumber))
        }
    }
}
export default connect(null, mapDispatchToProps)(ShopSearchBarCTT)
