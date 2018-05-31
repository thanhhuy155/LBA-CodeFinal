import React, { Component } from 'react';
import AdminListAdminCTT from '../../constructors/admin/AdminListAdminCTT';
import SearchbarCTT from '../../constructors/admin/Accounts/SearchbarCTT';

import ShopOwnerItem from '../../components/admin/Accounts/ShopOwnerItem/ShopOwnerItem';
import ShopOwnerList from '../../components/admin/Accounts/ShopOwnerList/ShopOwnerList';
import axios from 'axios';
import '../../components/admin/adminstyle.css';
import { connect } from 'react-redux';
import callAPI from './../../utils/apiCaller';
import { actFeatchShopOwnerRequest, actDeleteShopOwnerRequest } from '../../actions/index';
class ShopOwnerManagementPage extends Component {

    componentWillMount() {
        this.props.fetchAllShopOwner();
    }
    onDelete = (Owner_ID) => {
        this.props.onDeleteShopOwner(Owner_ID);
        console.log(Owner_ID);
    }
    render() {
        var { shopowners } = this.props;
        return (
            <div className="col-xs-10 col-sm-10 col-md-9 col-lg-9" style= {{paddingTop:50}}>
                <ShopOwnerList>
                    {this.showShopOwner(shopowners)}
                </ShopOwnerList>
                </div>
        );
    }
    showShopOwner(shopowners) {

        var result = null;
        if (shopowners) {
            if (shopowners.length > 0) {
                result = shopowners.map((shopowner, index) => {
                    return (
                        <ShopOwnerItem
                            key={index}
                            shopowner={shopowner}
                            index={index}
                            onDelete={this.onDelete} //khai bao them ham xoa
                        />
                    )
                }
                )
            }
        }
        return result;
    }

}
const mapSateToProps = state => {
    return {
        shopowners: state.shopowners
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllShopOwner: () => {
            dispatch(actFeatchShopOwnerRequest())
        },
        onDeleteShopOwner: (Owner_ID) => {
            dispatch(actDeleteShopOwnerRequest(Owner_ID))
        }
    }
}
export default connect(mapSateToProps, mapDispatchToProps)(ShopOwnerManagementPage);