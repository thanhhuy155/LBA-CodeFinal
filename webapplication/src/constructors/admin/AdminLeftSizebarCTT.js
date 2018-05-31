import React, { Component } from 'react';
import AdminLeftSizebar from '../../components/admin/AdminLeftSizebar'
import AdminContainDashBoard from '../../components/admin/AdminContainDashBoard'
import { connect } from 'react-redux'
import '../../components/admin/adminstyle.css'
class AdminLeftSizebarCTT extends Component {
    render() {
        return (
            <div >
                <AdminLeftSizebar />
                <AdminContainDashBoard />
            </div>
        )
    }
};
const mapStyleToProps = (state) => {
    return {
    }
}
export default connect(mapStyleToProps, null)(AdminLeftSizebarCTT)
