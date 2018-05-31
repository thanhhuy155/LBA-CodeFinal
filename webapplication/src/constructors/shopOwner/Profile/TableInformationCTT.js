import React, { Component } from 'react';
import TableInformation from '../../../components/shopOwner/Profile/TableInformation'
import {connect} from 'react-redux'
class TableInformationCTT extends Component {
    render() {
        return (
            <TableInformation />
        )
    }
};
 export default connect (null,null)(TableInformation)