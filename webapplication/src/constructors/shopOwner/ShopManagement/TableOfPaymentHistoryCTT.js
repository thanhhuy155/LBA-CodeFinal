import React, { Component } from 'react';
import {connect} from 'react-redux'
import TableOfPaymentHistory from '../../../components/shopOwner/ShopManagement/TableOfPaymentHistory'
class TableOfPaymentHistoryCTT extends Component {
  render() {
    return (
      <TableOfPaymentHistory />
    )
  }
};

export default connect (null,null) (TableOfPaymentHistoryCTT)