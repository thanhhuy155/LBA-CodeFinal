import React, { Component } from 'react';
import {connect} from 'react-redux'
import CalendarEvent from '../../../components/shopOwner/ShopManagement/CalendarEvent'
import {actHandleDeleteEvent, actHandleChangeEvent, actGettingEventComment} from '../../../actions/EventManagementAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
import {actGetDataForModalEventDetail, actSwitchEventModal} from '../../../actions/ModalEventDetailAction'
import Waiting from '../../../components/Waiting'
class CalendarEventCTT extends Component {

  render() {
    const {dataEventsList,onGetDataForModalEventDetail, onSwitchEventModal, onGetEventComment} = this.props
    if (dataEventsList)
    {
      return (
        <CalendarEvent 
          dataEventsList = {dataEventsList} 
          onGetDataForModalEventDetail = {onGetDataForModalEventDetail}
          onSwitchEventModal = {onSwitchEventModal}
          onGetEventComment = {onGetEventComment}
        />
      )
    }
    else {
      return (
        <Waiting />
      )
    }
    
  }
};

const mapStyleToProps = (state) => {
  return {
    dataEventsList: state.handleGetEventsList,
    dataShop: state.handleGetShopDetail
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
     onGetDataForModalEventDetail: (eventItem) =>{
       dispatch (actGetDataForModalEventDetail (eventItem))
     },
     onSwitchEventModal : () =>{
       dispatch (actSwitchEventModal ())
     },
     onGetEventComment: (idEvent, page) =>{
      dispatch (actGettingEventComment (idEvent, page))
    }
  }
}
export default connect (mapStyleToProps,mapDispatchToProps) (CalendarEventCTT)
