import React, { Component, Fragment } from 'react';
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'react-bootstrap'
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TrackPosition: 2
        }
    }

    handleSelect = (selectedKey) => {
        this.setState({ TrackPosition: selectedKey })
    }
    render() {
        return (
            <Fragment>
                <div class="profile" style={{ backgroundColor: '#CFD8DC', marginLeft: 5 }}>
                    <div class="profile-sidebar">
                        <div class="profile-usermenu">
                            <Nav activeKey={this.state.TrackPosition} onSelect={this.handleSelect} activeClassName="selected">

                                <Link className="list-group-item" to={`/s`}><span class="glyphicon glyphicon-home" aria-hidden="true"></span>&nbsp;<strong>Shop Management</strong></Link>
                                <Link className="list-group-item" to={`/s/BudgetManagementPage`}><span class="glyphicon glyphicon-usd" aria-hidden="true"></span>&nbsp;<strong>Budget Management</strong></Link>
                                <Link className="list-group-item" to='/s/CreateStorePage'><span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span>&nbsp;<strong>Create Shop</strong></Link>
                                {/* <Link className="list-group-item" to='/s/AdminMessages'><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;<strong>Message</strong></Link> */}
                                                            
                            </Nav>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
};
const Styles = {
    linkItem: {
        textDecoration: 'none',
    }
}


