import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import HeaderCTT from '../../constructors/shopOwner/HomePage/HeaderCTT'
import SidebarCTT from '../../constructors/shopOwner/HomePage/SidebarCTT'
import './shopOwnerHomePage.css'
import {Switch, Route,Redirect} from 'react-router-dom'
//page
import BudgetManagementPage from './BudgetManagement/BudgetManagementPage'
import ContactUsPage from './ContactUs/ContactUsPage'
import CreateStorePage from './CreateStore/CreateStorePage'
import MessagePage from './Message/MessagePage'
import ProfilePage from './Profile/ProfilePage'
import StatisticsPage from './Statistics/StatisticsPage'
import StoreManagementPage from './StoreManagement/StoreManagementPage'
import StoreDetailPage from './StoreManagement/StoreDetailPage'
import WattingModalCTT from '../../constructors/main/WattingModalCTT'

import {actHandleGetShopManagement} from '../../actions/ShopManagementAction'
// Tam thoi
import ShopDetail from '../../components/shopOwner/ShopManagement/ShopDetail'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Notifications, {notify} from 'react-notify-toast';
class ShopOwnerHomePage extends Component {

  componentWillMount ()
  {
    this.props.onGetShop()
  }

  render() {
    if (localStorage.getItem('User'))
      if (JSON.parse (localStorage.getItem('User')).data.Group_Accounts_Id === 2)
        return (
          <Fragment>
            <WattingModalCTT />
            <Notifications />            
            <HeaderCTT />  
            <div class="container-fluid">
              <div class="row wrapper-body">
                <div class  = "col-sm-3 col-md-2 sidebar" style= {{padding:0}}>
                  <SidebarCTT/>
                </div>
                <div class ="col-sm-9 col-md-10">
                  <Switch>
                    <Route exact path= {`${this.props.match.url}`} component = {StoreManagementPage}/>
                    <Route path= {`${this.props.match.url}/BudgetManagementPage`} component = {BudgetManagementPage}/>
                    <Route path= {`${this.props.match.url}/CreateStorePage`} component = {CreateStorePage}/>
                    <Route path= {`${this.props.match.url}/ContactUsPage`} component = {ContactUsPage}/>
                    <Route path= {`${this.props.match.url}/ProfilePage`} component = {ProfilePage}/>
                    <Route path= {`${this.props.match.url}/StatisticsPage`} component = {StatisticsPage}/>
                    <Route path= {`${this.props.match.url}/StoreManagementPage`} component = {StoreManagementPage}/>
                    <Route path= {`${this.props.match.url}/AdminMessages`} component = {MessagePage}/>
                    <Route path= {`${this.props.match.url}/StoreDetailPage/:id`} component = {StoreDetailPage}/>
                    <Route path= {`/s`} component = {()=> <div>Not Found Page</div>}/>
                  </Switch>
                </div>
              </div>
            </div>
          </Fragment>
        )
        else{
          return (<Redirect to={{ pathname: '/' }} />)
        }
      else{
        return (<Redirect to={{ pathname: '/' }} />)
    }
  }
};

const mapStyleToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetShop:  async () => {
      dispatch (actHandleGetShopManagement())
    }
  }
}

export default connect (null, mapDispatchToProps)(ShopOwnerHomePage);