import React, { Component } from 'react';
import {connect} from 'react-redux'
import LikeStatistic from '../../../components/shopOwner/ShopManagement/LikeStatistic'
class LikeStatisticsCTT extends Component {
  render() {
    return (
      <LikeStatistic/>
    )
  }
};

export default connect (null,null) (LikeStatisticsCTT)
