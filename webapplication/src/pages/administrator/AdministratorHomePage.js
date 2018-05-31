import React, { Component } from 'react';
import AdminHeaderCTT from '../../constructors/admin/AdminHeaderCTT';
import AdminNarbarCTT from '../../constructors/admin/AdminNarbarCTT';
import AdminMainDashBoardCTT from  '../../constructors/admin/AdminMainDashBoardCTT';
import ListAdminPage from './ListAdminPage';
import AdminMainPage from './AdminMainPage';
import PromotionManagementPage from './PromotionManagementPage';
import ShopOwnerManagementPage from './ShopOwnerManagementPage';
import CustomerManagementPage from './CustomerManagementPage';
import ShopsManagementPage from './ShopsManagementPage';
import { Switch, Redirect} from 'react-router-dom';
import { Route } from 'react-router-dom';
import '../../components/admin/adminstyle.css'
export default class AdminstratorHomePage extends Component {
  render() {
    if (localStorage.getItem('User'))
      if (JSON.parse (localStorage.getItem('User')).data.Group_Accounts_Id === 1)
    return (
      <div>
        <AdminNarbarCTT />
        {/* <AdminHeaderCTT /> */}    
              <AdminMainDashBoardCTT/>
              <Switch>
                <Route exact name="Admin" path='/a' component={AdminMainPage} />
                <Route name='AdminList' path={`${this.props.match.url}/admin-list`}
                 component={ListAdminPage} />
                <Route name='CustomerManagement' path={`${this.props.match.url}/customer`}
                  component={CustomerManagementPage} />

                <Route name='ShopOwnerManagement' path={`${this.props.match.url}/shopowner`}
                  component={ShopOwnerManagementPage} />
                <Route name='ShopsManagement' path={`${this.props.match.url}/shop`}
                  component={ShopsManagementPage} />
                <Route name='PromotionManagement' path={`${this.props.match.url}/promotion`}
                  component={PromotionManagementPage} />
              </Switch>
      </div>
    )
    else{
      return (<Redirect to={{ pathname: '/' }} />)
    }
  else{
    return (<Redirect to={{ pathname: '/' }} />)
}
  }
};