import React, { Component } from 'react';
import AdminLeftSizebar from '../../components/admin/AdminLeftSizebar';
import AdminContainDashBoard from '../../components/admin/AdminContainDashBoard/AdminContainDashBoard';
import AdminContain from '../../components/admin/AdminContain';
import { connect } from 'react-redux'
import '../../components/admin/adminstyle.css'
class AdminMainDashBoardCTT extends Component {
    render() {
        return (
            <div >
                <AdminLeftSizebar />
            </div>
        )
    }
};
const mapStyleToProps = (state) => {
    return {
    }
}
export default connect(mapStyleToProps, null)(AdminMainDashBoardCTT)
