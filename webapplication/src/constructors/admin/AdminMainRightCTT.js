import React, { Component } from 'react';
import AdminLeftSizebar from '../../components/admin/AdminLeftSizebar';
import AdminContainDashBoard from '../../components/admin/AdminContainDashBoard/AdminContainDashBoard';
import AdminContainDashBoardList from '../../components/admin/AdminContainDashBoardList/AdminContainDashBoardList';
import AdminContain from '../../components/admin/AdminContain';
import { connect } from 'react-redux';
import '../../components/admin/adminstyle.css';
import callAPI from './../../utils/apiCaller';
import { actFeatchDataSumRequest } from '../../actions/index';
class AdminMainRightCTT extends Component {
    componentWillMount() {
        this.props.fetchAllSumData();
    }
    render() {
        var { sumdatas } = this.props
        return (
            <AdminContainDashBoardList>
                {this.showSumdata(sumdatas)}
            </AdminContainDashBoardList>
        )
    }
    showSumdata(sumdatas) {
        var result = null;
        if (sumdatas) {
            if (sumdatas.length > 0) {
                result = sumdatas.map((sumdata, index) => {
                    return (
                        <AdminContainDashBoard
                            key={index}
                            sumdata={sumdata}
                            index={index}
                        />
                    )
                }
                )
            }
        }
        return result;
    }
};
const mapSateToProps = state => {
    return {
        sumdatas: state.sumdatas
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllSumData: () => {
            dispatch(actFeatchDataSumRequest())
            
        }
    }
}
export default connect(mapSateToProps, mapDispatchToProps)(AdminMainRightCTT)
