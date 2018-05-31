import React, { Component,Fragment} from 'react';

export default class TableOfPaymentHistory extends Component {
  render() {
    return (
      <Fragment>
        <h4><strong>Payment History Table</strong></h4>
        <table class="table table-hover table-striped">
            <thead style= {{backgroundColor:'#80CBC4'}}>
                <tr>
                    <th>Event</th>
                    <th>Payment Date</th>
                    <th>Payment Status</th>
                    <th>Payment Methods</th>
                    <th>Fee</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    You have no data
                </tr>
            </tbody>
        </table>
      </Fragment>
      
    )
  }
};
