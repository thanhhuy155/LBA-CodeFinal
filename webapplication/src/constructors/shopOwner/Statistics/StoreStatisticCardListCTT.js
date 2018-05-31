import React, { Component } from 'react';
import StoreStatisticCardList from '../../../components/shopOwner/Staristics/StoreStatisticCardList'
import {connect} from 'react-redux'
class StoreStatisticCardListCTT extends Component {
    render() {
        const {dataShops} = this.props
        return (
            <StoreStatisticCardList dataShops ={dataShops}/>
        )
    }
};

const mapStyleToProps = (state) => {
    return {
      dataShops: state.handleGetStores
    }
}

export default connect (mapStyleToProps,null) (StoreStatisticCardListCTT)
