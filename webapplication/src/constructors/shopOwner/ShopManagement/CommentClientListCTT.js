import React, { Component } from 'react';
import CommentClientList from '../../../components/shopOwner/ShopManagement/CommentClientList'
import {connect} from 'react-redux'
class CommentClientListCTT extends Component {
    render() {
        return (
            <CommentClientList />
        )
    }
};

export default connect (null, null)(CommentClientList)