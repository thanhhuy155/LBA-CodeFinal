import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import StoreEventPage from './StoreEventPage'
import StoreInformationPage from './StoreInformationPage'
import StorePaymentHistoryPage from './StorePaymentHistoryPage'
import ClientCommentPage from './ClientCommentPage'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../../../styles/ShopOwnerStyles/StoreDetailPage.css'
import { actHandleGetShopDetail, acthandleChangeShopStatus} from '../../../actions/ShopManagementAction'
import { connect } from 'react-redux'
import {actResetReduxForShopDetail} from '../../../actions/ResetReduxAction'
import Waiting from '../../../components/Waiting'
class StoreDetailPage extends Component {

  componentWillMount() {
    this.props.onGetShopDetail(this.props.match.params.id)
  }

  changeStatusShop = async () =>{
    await this.props.onChangeStatusShop(this.props.match.params.id)
  }

  componentWillUnmount ()
  {
    this.props.onResetRedux()
  }

  render() {
    const { dataShopDetail } = this.props
    if (dataShopDetail) {
      if (dataShopDetail.message.success) {
        return (
          <div class="container-fluid">

            <div class="row">
              <h1>{dataShopDetail.data.store_Details.Store_Name}</h1>
              {dataShopDetail.data.store_Details.Store_Status === 0 ? (
                <h4><a onClick = {()=> this.changeStatusShop()} class="label label-danger">Closed</a></h4>
              ) : (
                  <h4><a onClick = {()=> this.changeStatusShop()} class="label label-success">Opening</a></h4>
                )}


              <div class="btn-group-horizon">
                <Link style={{ backgroundColor: '#FFAB91' }} class="btn btn-default" to={`${this.props.match.url}`}>Shop Information</Link>
                <Link style={{ backgroundColor: '#DCEDC8' }} class="btn btn-default" to={`${this.props.match.url}/EventOfShop`}>Promotion Information</Link>
                <Link style={{ backgroundColor: '#B2DFDB' }} class="btn btn-default" to={`${this.props.match.url}/PaymentHistory`}>Payment History</Link>
                <Link style={{ backgroundColor: '#D7CCC8' }} class="btn btn-default" to={`${this.props.match.url}/ClientCommentPage`}>Rating Customer</Link>
              </div>
            </div>

            <div class="row" style={{ marginTop: 20 }}>
              <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={2000}
                transitionEnter={false}
                transitionLeave={false}
              >
                <Switch>
                  <Route exact path={`${this.props.match.url}`} component={StoreInformationPage} />
                  <Route path={`${this.props.match.url}/EventOfShop`} component={StoreEventPage} />
                  <Route path={`${this.props.match.url}/PaymentHistory`} component={StorePaymentHistoryPage} />
                  <Route path={`${this.props.match.url}/ClientCommentPage`} component={ClientCommentPage} />
                </Switch>
              </ReactCSSTransitionGroup>
            </div>


          </div>

        )
      }
      else {
        return <p>{dataShopDetail.message.error}</p>
      }
    }
    else {
      return <Waiting/>
    }

  }
};

const mapStyleToProps = (state) => {
  return {
    dataShopDetail: state.handleGetShopDetail
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetShopDetail: async (id) => {
      dispatch(actHandleGetShopDetail(id))
    },
    onChangeStatusShop: async (idShop) =>{
      await dispatch (acthandleChangeShopStatus (idShop))
    },
    onResetRedux:  () =>{
      dispatch (actResetReduxForShopDetail ())
    }
  }
}

export default connect(mapStyleToProps, mapDispatchToProps)(StoreDetailPage)