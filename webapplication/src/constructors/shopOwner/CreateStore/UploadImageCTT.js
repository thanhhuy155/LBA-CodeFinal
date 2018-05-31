import React, { Component } from 'react';
import UploadImage from '../../../components/shopOwner/CreateStore/UploadImage'
import {connect} from 'react-redux'
class UploadImageCTT extends Component {
    render() {
        return (
            <UploadImage />
        )
    }
};

export default connect (null,null)(UploadImageCTT)
