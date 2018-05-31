import React, { Component } from 'react';
import './adminstyle.css';
import { Link } from 'react-router-dom';
import LogoImage from './../../images/iconapp.ico';
export default class AdminNarbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar1 navbar-default1" id = "header1">
                    {/* <div className="container"> */}
                        <div className="navbar-header" style = {{paddingLeft : 120}}>
             <h1 style = {{color:'white'}}><Link to ="/a" style = {{textDecoration:'none',color: 'white'}}> <img src={LogoImage}  alt="Image" style = {{height:50, width:50, marginRight:10}}/>LBA </Link><small>Admin Site</small></h1>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            {/* <ul className="nav navbar-nav" >
                                <li><Link to= "/a">Home</Link></li>
                                <li><Link to= "/a/customer">Customer</Link></li>
                                <li ><Link to= "/a/shopowner" >Shop Owner</Link></li>
                                <li ><Link to= "/a/shop" >Shop</Link></li>
                                <li ><Link to= "/a/promotion" >Promotion</Link></li>
                                <li ><Link to= "/a/admin-list" >Admin</Link></li>
                            </ul> */}
                            <ul className="nav navbar-nav navbar-right" style = {{marginTop : 30, color: 'white', marginLeft:20}}>
                              <a  style = {{paddingRight: 30,float: 'right',marginLeft:10,textDecoration:'none',color: 'white',}} role = "button" onClick = {()=> this.props.onLogout()}>Logout</a>
                              <a style = {{marginLeft:50,textDecoration:'none',color: 'white',}}>{`Welcome: ${JSON.parse(localStorage.getItem('User')).data.admin_Details.Admin_Name}`}</a>
                            </ul>
                        </div>
                    {/* </div> */}
                </nav>
            </div>
        )
    }
};
