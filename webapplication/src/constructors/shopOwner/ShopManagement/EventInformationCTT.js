import React, { Component } from 'react';
import EventInformation from '../../../components/shopOwner/ShopManagement/EventInformation'
import {connect} from 'react-redux'
import {actHandleGetEventStaristic, actCreateEvent} from '../../../actions/EventManagementAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
import Waiting from '../../../components/Waiting'
class EventInformationCTT extends Component {

    componentWillMount (){
        this.props.onGetEventStatistic (this.props.dataShopDetail.data.store_Details.Store_ID);
    }
    render() {
        const {dataEventStatistics, onCreateEvent, resultFromCreatingEvent, dataShopDetail, onSwitchWaitingModal} = this.props;
        if (dataEventStatistics)
        {
            return <EventInformation
                    dataEventStatistics ={dataEventStatistics}
                    onCreateEvent = {onCreateEvent}
                    resultFromCreatingEvent = {resultFromCreatingEvent}
                    dataShopDetail = {dataShopDetail}
                    onSwitchWaitingModal = {onSwitchWaitingModal}
                />
        }
        else{
            return <Waiting />
        }
        
    }
};

const mapStyleToProps = (state) => {
    return {
      dataEventStatistics: state.handleGetEventStaristic,
      dataShopDetail: state.handleGetShopDetail,
      resultFromCreatingEvent: state.handleCreateEvent
    }
  }

  
const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetEventStatistic: (idShop) => {
            dispatch(actHandleGetEventStaristic(idShop))        
        },
        onCreateEvent: async ( Store_Details_ID, Promotion_Title, Promotion_Description, Promotion_DateStart, Promotion_DateEnd, imageArray) =>{
            await dispatch ( actCreateEvent ( Store_Details_ID, Promotion_Title, Promotion_Description, Promotion_DateStart, Promotion_DateEnd, imageArray))
        },
        onSwitchWaitingModal:  () => {
            dispatch (actSwitchWattingModal())
        }
      
    }
}
export default connect (mapStyleToProps,mapDispatchToProps) (EventInformationCTT)
