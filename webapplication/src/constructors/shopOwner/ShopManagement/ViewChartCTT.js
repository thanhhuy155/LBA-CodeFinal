import React, { Component } from 'react';
import {connect} from 'react-redux'
import ViewChart from '../../../components/shopOwner/ShopManagement/ViewChart'
class ViewChartCTT extends Component {
  render() {
    return (
      <ViewChart/>
    )
  }
};

export default connect (null,null) (ViewChartCTT)