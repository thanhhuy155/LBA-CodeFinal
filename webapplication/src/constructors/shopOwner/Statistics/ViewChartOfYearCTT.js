import React, { Component } from 'react'
import {connect} from 'react-redux'
import ViewChartOfYear from '../../../components/shopOwner/Staristics/ViewChartOfYear'
import {actHandleGetViewChartOfYear} from '../../../actions/ShopManagementAction'
import {handleSplitDate} from '../../../constraints/HandleDate'
class ViewChartOfYearCTT extends Component {
    
    componentWillMount ()
    {
        this.props.onGetViewChartOfYear (this.props.dataShop.data.store_Details.Store_ID, 2018)
    }
    render() {
    const {dataFromGettingViewChartOfYear , dataShop, onGetViewChartOfYear} = this.props
    if (dataFromGettingViewChartOfYear)
    {
        if (dataFromGettingViewChartOfYear.message.success){
            return (
                <ViewChartOfYear 
                  dataFromGettingViewChartOfYear = {dataFromGettingViewChartOfYear.data}
                  idShop = {dataShop.data.store_Details.Store_ID}
                  onGetViewChartOfYear = {onGetViewChartOfYear}
                  createdDateOfShop = {handleSplitDate (dataShop.data.store_Details.Store_Created)}
                />
              )
        }
        else {
            alert (dataFromGettingViewChartOfYear.message.error)
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
      dataFromGettingViewChartOfYear: state.handleGetViewChartOfYear,
      dataShop: state.handleGetShopDetail
    }
  }

  
const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetViewChartOfYear: async (idShop, year) =>{
            await dispatch (actHandleGetViewChartOfYear (idShop, year))
        }
      
    }
}
export default connect (mapStyleToProps, mapDispatchToProps) (ViewChartOfYearCTT)
