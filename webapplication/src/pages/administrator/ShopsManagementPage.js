import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminListAdminCTT from '../../constructors/admin/AdminListAdminCTT';
import ShopSearchBarAdminCTT from '../../constructors/admin/Accounts/ShopSearchBarAdminCTT';
import ShopItem from '../../components/admin/Accounts/ShopItem/ShopItem';
import ShopList from '../../components/admin/Accounts/ShopList/ShopList';
import '../../components/admin/adminstyle.css';
import callAPI from './../../utils/apiCaller';
import { actFeatchShop, actFeatchShopRequest, actDeleteShopRequest } from '../../actions/index'
class ShopsManagementPage extends Component {
    constructor(props){
        super(props);
        this.state={
            shops : [],
            shopsAftersorting: []
        };
    }
    componentWillMount() {
        this.props.fetchAllShop();
    }
    render() {
        var  {shops,sortNumber} = this.props;
        return (
            <div class="container-fluid">
            <div class="row-fluid">
                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        <ShopSearchBarAdminCTT />
                        <ShopList
                            sortNumber = {sortNumber}
                        >
                    {this.showShop(shops)}
                </ShopList>
                </div>
            </div>
            </div>
        );  
    }
    onDelete = (Store_ID) => {
        this.props.onDeleteShop(Store_ID);
    }

    showShop(shops) {
        var result = null;
        var numberSort = this.props.sortNumber
        var resultAfterFiltering = []
        if (shops) {
            if (shops.length > 0) {
                if (Number (numberSort) ===2)
                    resultAfterFiltering = shops.filter((item) => item.Store_Status === 1)
                else if (Number (numberSort) ===3)
                    resultAfterFiltering = shops.filter((item) => item.Store_Status === 0)
                else resultAfterFiltering = shops
                result = resultAfterFiltering.map((shop, index) => {
                    return (
                        <ShopItem
                            key={index}
                            shop={shop}
                            index={index}
                            onDelete={this.onDelete } //khai bao them ham xoa
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
        shops: state.shops,
        sortNumber: state.handleSortShopForAdmin
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteShop: (Store_ID) => {
            dispatch(actDeleteShopRequest(Store_ID))
        },
        fetchAllShop: () => {
            dispatch(actFeatchShopRequest())
        }
    }
}
export default connect(mapSateToProps, mapDispatchToProps)(ShopsManagementPage);