import React, { Component } from 'react'
import {connect} from 'react-redux'
import ViewChartOfMonth from '../../../components/shopOwner/Staristics/ViewChartOfMonth'
import {actHandleGetViewChartOfMonth} from '../../../actions/ShopManagementAction'
class ViewChartOfMonthCTT extends Component {

  componentWillMount (){
    var today = new Date ()
    this.props.onGetViewChartOfMonth (this.props.dataShop.data.store_Details.Store_ID, today.getFullYear (), today.getMonth()+1)
  }
  render() {
    const {dataFromGettingViewChartOfMonth, dataShop, onGetViewChartOfMonth} = this.props
    if (dataFromGettingViewChartOfMonth){
        if (dataFromGettingViewChartOfMonth.message.success)
        {
          return (
            <ViewChartOfMonth 
              dataFromGettingViewChartOfMonth = {dataFromGettingViewChartOfMonth.data}
              idShop = {dataShop.data.store_Details.Store_ID}
              onGetViewChartOfMonth = {onGetViewChartOfMonth}
            />
          )
        }
        else{
          alert (dataFromGettingViewChartOfMonth.message.error)
          return (<p>Something was wrong</p>)
        }
      }
    else {
      return (<p>Loading</p>)
    }
  }
}

const mapStyleToProps = (state) => {
  return {
    dataFromGettingViewChartOfMonth: state.handleGetViewChartOfMonth,
    dataShop: state.handleGetShopDetail
  }
}


const mapDispatchToProps = (dispatch, props) => {
  return {
      onGetViewChartOfMonth: async (idShop, year , month) =>{
          await dispatch (actHandleGetViewChartOfMonth (idShop, year ,month))
      }
    
  }
}
export default connect (mapStyleToProps, mapDispatchToProps) (ViewChartOfMonthCTT)
