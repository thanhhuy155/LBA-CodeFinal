import React, { Component,Fragment} from 'react';
import './../adminstyle.css';
import { Link} from 'react-router-dom';
export default class AdminContainDashBoard extends Component {
    render() {
        var { sumdata, index } = this.props;
        return (        
<Fragment>
                      <Link to="/a/customer">
                        <div className="col-md-3">
                      
                            <div className="well dash-box w3-teal">
                              
                                <h2><span className="glyphicon glyphicon-user w3-text-blue " aria-hidden="true"/>  {sumdata.sumCustomer}</h2><h4>Users</h4>
                          
                            </div>
                        </div>
                        </Link>
                        <Link to="/a/shopowner">
                        <div className="col-md-3">
                            <div className="well dash-box w3-teal">
                                <h2><span className="glyphicon glyphicon-user" aria-hidden="true"/>  {sumdata.sumStoreOwner}</h2><h4>Shop Owners</h4>
                            </div>
                        </div>
                        </Link>
                         <Link to="/a/shop">
                        <div className="col-md-3">
                            <div className="well dash-box w3-teal1">
                                <h2><span className="glyphicon glyphicon-list-alt" aria-hidden="true"/> { sumdata.sumStore}</h2><h4>Total Shop</h4>
                            </div>
                        </div>
                        </Link>
                         <Link to="/a/promotion">
                        <div className="col-md-3">
                            <div className="well dash-box w3-teal2">
                                <h2><span className="glyphicon glyphicon-pencil" aria-hidden="true"/> {sumdata.sumPromotion}</h2><h4>Available Promotions</h4>
                            </div>
                        </div>
                        </Link>
                        <div className="col-md-3">
                            <div className="well dash-box w3-teal3">
                                <h2><span className="glyphicon glyphicon-stats" aria-hidden="true"/> {sumdata.sumStoreView}</h2><h4>Visitors</h4>
                            </div>
                        </div>
</Fragment>
        )
    }
};

<div class="panel panel-success">
      <div class="panel-heading">
            <h3 class="panel-title">Panel title</h3>
      </div>
      <div class="panel-body">
            Panel content
      </div>
</div>
