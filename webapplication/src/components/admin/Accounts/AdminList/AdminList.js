import React, { Component } from 'react';
class AdminList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">List Admin</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style = {{textAlign: 'center'}}>ID</th>
                                <th style = {{display : 'none'}}>Code</th>
                                <th  style = {{textAlign: 'center'}}>Admin Name</th>
                                <th  style = {{textAlign: 'center'}}>Email</th>
                                {/* <th>Status</th> */}
                                {/* <th  style = {{textAlign: 'center'}}>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AdminList;







