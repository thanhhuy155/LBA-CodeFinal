import React, { Component } from 'react'
import {actHandleChangeEvent, actHandleDeleteEvent, actGettingEventComment} from '../../../actions/EventManagementAction'
import ModalEventDetail from '../../../components/shopOwner/ShopManagement/ModalEventDetail'
import {actSwitchWattingModal} from '../../../actions/MainAction'
import {actSwitchEventModal} from '../../../actions/ModalEventDetailAction'
import {connect} from 'react-redux'
class ModalEventDetailCTT extends Component {
  render() {
    const {dataEventDetail, isOpenModalEventDetail , 
      onChangeEvent, onDeleteEvent, onSwitchWaitingModal, onSwitchEventModal, dataEventComments, onGetEventComment} = this.props
      return (
      <ModalEventDetail 
        dataEventDetail = {dataEventDetail}
        isOpenModalEventDetail = {isOpenModalEventDetail}
        onChangeEvent = {onChangeEvent}
        onDeleteEvent = {onDeleteEvent}
        onSwitchWaitingModal = {onSwitchWaitingModal}
        onSwitchEventModal = {onSwitchEventModal}
        dataEventComments = {dataEventComments}
        onGetEventComment = {onGetEventComment}
      />
    )
  }
}

const mapStyleToProps = (state) => {
  return {
    dataEventDetail: state.handleGetDataForModalEventDetail,
    isOpenModalEventDetail : state.handleSwitchModalEventDetail,
    dataEventComments : state.handleGetCustomerCommentForEvent,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
      onChangeEvent: async (Promotion_ID, Promotion_Title, Promotion_Description,imageArray, Promotion_DateStart,
         Promotion_DateEnd, deletedImageList, remainingPictures, keepStartDate, keepCloseDate) => {
          await dispatch (actHandleChangeEvent(Promotion_ID, Promotion_Title, Promotion_Description,imageArray, 
            Promotion_DateStart, Promotion_DateEnd, deletedImageList, remainingPictures, keepStartDate, keepCloseDate))
      },
      onDeleteEvent: async (Promotion_ID,txtStartDate, txtCloseDate) =>{
        await dispatch (actHandleDeleteEvent (Promotion_ID, txtStartDate, txtCloseDate))
      },
      onSwitchWaitingModal:  () => {
        dispatch (actSwitchWattingModal())
      },
      onSwitchEventModal : () =>{
        dispatch (actSwitchEventModal())
      },
      onGetEventComment: (idEvent, page) =>{
        dispatch (actGettingEventComment (idEvent, page))
      }
  }
}
export default connect (mapStyleToProps , mapDispatchToProps) (ModalEventDetailCTT)
