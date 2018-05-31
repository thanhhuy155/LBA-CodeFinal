import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './adminstyle.css'

export default class AdminLeftSizebar extends Component {
  render() {
    return (
        <div className="col-md-3 asdasd" style ={{marginTop:30}} >
            <div className="list-group" >
                <Link to ="/a" className="list-group-item active main-color-bg">
                    <span className="glyphicon glyphicon-cog" aria-hidden="true" /> Dashboard
          </Link>

                <Link to="/a/admin-list" className="list-group-item list-group-item1">
                    <span className="glyphicon glyphicon-user" aria-hidden="true" /> Administrator Management
                <span className="badge">
                    </span>  </Link>
                <Link to="/a/customer" className="list-group-item list-group-item1">
                    <span className="glyphicon glyphicon-user" aria-hidden="true" /> Customer Management 
                <span className="badge"></span>
                </Link>
                <Link to="/a/shopowner" className="list-group-item list-group-item1">
                    <span className="glyphicon glyphicon-user" aria-hidden="true" /> Shop Owner Management <span className="badge"></span></Link>
                <Link to= "/a/shop"  className="list-group-item  list-group-item1">
                    <span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> Shop Management<span className="badge">
                </span></Link>
                <Link to= "/a/promotion"  className="list-group-item list-group-item1">
                    <span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> Promotion Management<span className="badge">
                </span></Link>
            </div>
            {/* <div className="well">
                <h4>Notification Analysis</h4>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}>
                        60%
            </div>
                </div>
                <h4>Taget Customer </h4>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '40%' }}>
                        40%
            </div>
                </div>
            </div> */}
        </div>
    )
  }
};

