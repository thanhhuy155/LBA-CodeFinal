import React, { Component, Fragment } from 'react';
import LogoImage from './../../../images/iconapp.ico';
import { Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav class="navbar navbar-default" role="navigation" style={{ marginBottom: 0, backgroundColor:'black'}}>
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Link to = '/s'>
                            <img src={LogoImage}  alt="Image" style = {{height:40, width:40,float: 'left',margin:5,marginLeft:30}}/>
                            <a class="navbar-brand" >LBA for Shop Owner</a>
                        </Link>
                    </div>

                    <div class="collapse navbar-collapse navbar-ex1-collapse">

                        <ul class="nav navbar-nav navbar-right">
                            {/* <li><Link to='/s/ContactUsPage'>
                                <span class="glyphicon glyphicon-phone-alt" aria-hidden="true"></span>
                                &nbsp;<strong>Contact Us</strong></Link></li> */}
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <span class="	glyphicon glyphicon-user" aria-hidden="true"></span> &nbsp;
                                    <strong>{`Welcome ${JSON.parse (localStorage.getItem ('User')).data.store_Owners_Details1.Owner_LastName}`} </strong><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><Link to="/s/ProfilePage">
                                        <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                                        &nbsp;<strong>Profile</strong></Link></li>
                                    <li><a href="#">
                                        <span class="glyphicon glyphicon-wrench" aria-hidden="true"></span>
                                        &nbsp;<strong>Setting</strong></a></li>
                                    <li class="divider"></li>
                                    <li><a role= "button" onClick= {()=>this.props.onLogout()}>
                                        <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                                        &nbsp;<strong>Logout</strong></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
};

