import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../../../actions/index';

class CustomerList extends Component{
        constructor(props) {
            super(props);
            this.state = {
                filterName: '',
                filterStatus: -1 //all -1, male 0. female 1
            };
        }

        onChange = (event) => {
            var target = event.target;
            var name = target.name;
            var value = target.value;
            // this.props.onFilter(
            //     name === 'filterName' ? value : this.state.filterName,
            //     name === 'filterStatus' ? value : this.state.filterStatus)
            this.setState({
                [name]: value
            })
        }
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">List Customer</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style = {{textAlign: 'center'}}>ID</th>
                                <th style = {{display : 'none'}}>Code</th>
                                <th style = {{textAlign: 'center'}}>Customer Name</th>
                                <th style = {{textAlign: 'center', display : 'none'}}>Username</th>
                                <th style = {{textAlign: 'center'}}>DOB</th>
                                {/* <th>Status</th> */}
                                <th style = {{textAlign: 'center'}}>Gender</th>
                                <th style = {{textAlign: 'center'}}>Date Created</th>
                                <th style = {{textAlign: 'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
       
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTask(filter));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);