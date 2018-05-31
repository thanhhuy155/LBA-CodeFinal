import React, { Component } from 'react';
import AdminMainRightCTT from '../../constructors/admin/AdminMainRightCTT';
import '../../components/admin/adminstyle.css'
import AdminContainDashBoard from '../../components/admin/AdminContainDashBoard/AdminContainDashBoard';
import AdminContainDashBoardList from '../../components/admin/AdminContainDashBoardList/AdminContainDashBoardList';
import AdminContain from '../../components/admin/AdminContain';
import { connect } from 'react-redux';
import '../../components/admin/adminstyle.css';
import { actFeatchDataSumRequest } from '../../actions/index';
class AdminMainPage extends Component {

    render() {
       
        return (    
            <AdminMainRightCTT/>
        )
    }
}

export default AdminMainPage

