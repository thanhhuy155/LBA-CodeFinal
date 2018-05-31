import React, { Component } from 'react';
import {connect} from 'react-redux'
import TableOfEvents from '../../../components/shopOwner/Staristics/TableOfEvents'
import {actHandleGetEventsList} from '../../../actions/EventManagementAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
import {actHandleDeleteEvent, actGettingEventComment} from '../../../actions/EventManagementAction'
import {actGetDataForModalEventDetail, actSwitchEventModal} from '../../../actions/ModalEventDetailAction'
import Waiting from '../../../components/Waiting'
class TableOfEventsCTT extends Component {
    componentWillMount (){
        this.props.onGetEventsList (this.props.dataShop.data.store_Details.Store_ID)
    }

    render() {
        const {dataEventsList, onGetDataForModalEventDetail, onSwitchEventModal, onGetEventComment} = this.props
        if (dataEventsList)
        {
            return (
                <TableOfEvents
                    dataEventsList = {dataEventsList}
                    onGetDataForModalEventDetail = {onGetDataForModalEventDetail}
                    onSwitchEventModal = {onSwitchEventModal}
                    onGetEventComment = {onGetEventComment}
                />
            )
        }
        else {
            return (
                <Waiting/>
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
        onGetEventsList:  (id) => {
            dispatch (actHandleGetEventsList(id))
        },
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
export default connect (mapStyleToProps,mapDispatchToProps) (TableOfEventsCTT)
