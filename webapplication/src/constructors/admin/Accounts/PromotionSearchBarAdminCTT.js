import React, { Component } from 'react';
import { connect } from 'react-redux'
import PromotionSearchBarAdmin from '../../../components/admin/Accounts/PromotionItem/PromotionSearchBarAdmin'
import {actSortPromotionsForAdmin} from '../../../actions/SortPromotionsForAdminAction'
class PromotionSearchBarAdminCTT extends Component {
    render() {
        return (
            <PromotionSearchBarAdmin 
                 onSortShop = {this.props.onSortShop}
                 onSortPromotions = {this.props.onSortPromotions}
            />
        )
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSortPromotions: (sortNumber) => {
            dispatch(actSortPromotionsForAdmin(sortNumber))
        }
    }
}
export default connect(null, mapDispatchToProps)(PromotionSearchBarAdminCTT)
