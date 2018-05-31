import React, { Component } from 'react';
import AdminListAdminCTT from '../../constructors/admin/AdminListAdminCTT';
import SearchbarCTT from '../../constructors/admin/Accounts/SearchbarCTT';

import PromotionItem from '../../components/admin/Accounts/PromotionItem/PromotionItem';
import PromotionList from '../../components/admin/Accounts/PromotionList/PromotionList';
import axios from 'axios';
import '../../components/admin/adminstyle.css';
import { connect } from 'react-redux';
import callAPI from './../../utils/apiCaller';
import {actFeatchPromotionRequest, actDeletePromotionRequest} from '../../actions/index';
import PromotionSearchBarAdminCTT from '../../constructors/admin/Accounts/PromotionSearchBarAdminCTT';
import {handleCheckToday, handleSplitDate} from '../../constraints/HandleDate'
class PromotionManagementPage extends Component {

    componentWillMount() {
        this.props.fetchAllPromotion();
    }
    render() {
        var { promotions } = this.props

        return (
            <div class="row-fluid">
            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <PromotionSearchBarAdminCTT />
            <PromotionList>
                {this.showpromotions(promotions)}
            </PromotionList>
                        </div>
            </div>
        );
    }
    onDelete = (Promotion_ID) => {

        this.props.onDeleteStore(Promotion_ID);
        console.log(Promotion_ID);

    }
    showpromotions(promotions) {
        var result = null;
        var filterResult = []
        const {sortNumber} = this.props
        if (promotions) {
            if (promotions.length > 0) {
                if (Number (sortNumber) ===2)
                {
                    filterResult = promotions.filter ((item) =>{
                        return handleCheckToday(handleSplitDate(item.Promotion_DateStart), handleSplitDate (item.Promotion_DateEnd)) ===0
                    })
                }
                else if (Number (sortNumber) ===3)
                {
                    filterResult = promotions.filter((item) => {
                        return handleCheckToday(handleSplitDate(item.Promotion_DateStart), handleSplitDate(item.Promotion_DateEnd)) === -1
                    })
                }
                else if (Number (sortNumber) ===4)
                {
                    filterResult = promotions.filter((item) => {
                        return handleCheckToday(handleSplitDate(item.Promotion_DateStart), handleSplitDate(item.Promotion_DateEnd)) === 1
                    })
                }
                else{
                    filterResult = promotions
                }
                result = filterResult.map((promotion, index) => {
                    return (
                        <PromotionItem
                            key={index}
                            promotion={promotion}
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
        promotions: state.promotions,
        sortNumber: state.handleSortPromotionsForAdmin
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllPromotion: () => {
            dispatch(actFeatchPromotionRequest())
        },
        onDeleteStore: (Promotion_ID) => {
            dispatch(actDeletePromotionRequest(Promotion_ID))
        }
    }
}
export default connect(mapSateToProps, mapDispatchToProps)(PromotionManagementPage);