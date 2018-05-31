import React, { Component, Fragment } from 'react';
import EventItem from './EventItem'
import {DropdownButton, MenuItem} from 'react-bootstrap'
import {handleSplitDate, handleCheckToday} from '../../../constraints/HandleDate'
export default class TableOfEvents extends Component {
    constructor (props){
        super (props)
        this.state= {
            itemIndex: 1,
            dataEventsList: [],
            filterDataEventList : []
        }
    }

    componentWillMount (){
        this.setState ({
            dataEventsList: this.props.dataEventsList,
            filterDataEventList: this.props.dataEventsList
        })
    }

    componentWillReceiveProps (nextProps) {
        const {dataEventsList} = nextProps
        if (dataEventsList)
        {
            this.setState ({
                dataEventsList: dataEventsList,
                filterDataEventList: dataEventsList
            },)
        }
    }
    _ChangeEventsTable = (itemIndex) =>{
        var reDataEventsList = this.state.dataEventsList
        switch (itemIndex) {
            case 2:
                reDataEventsList = reDataEventsList.filter (
                    (item) => {
                        return handleCheckToday (
                            handleSplitDate (item.Promotion_DateStart),
                            handleSplitDate(item.Promotion_DateEnd) 
                            )===0})
                break;
            case 2:
                reDataEventsList = reDataEventsList.filter (
                    (item) => {
                        return handleCheckToday (
                            handleSplitDate (item.Promotion_DateStart),
                            handleSplitDate(item.Promotion_DateEnd) 
                            )===0})
                break;
            case 3:
            reDataEventsList = reDataEventsList.filter (
                (item) => {
                    return handleCheckToday (
                        handleSplitDate (item.Promotion_DateStart),
                        handleSplitDate(item.Promotion_DateEnd) 
                        )===-1})
                break;
            case 4:
            reDataEventsList = reDataEventsList.filter (
                (item) => {return handleCheckToday (
                        handleSplitDate (item.Promotion_DateStart),
                        handleSplitDate(item.Promotion_DateEnd) 
                        )===1})
                break;
        }
        this.setState ({
            itemIndex: itemIndex,
            filterDataEventList : reDataEventsList
        })
    }
    render() {
        const {itemIndex} = this.state
        return (
            <Fragment>
                
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <DropdownButton
                            title={'Sort For:  '}
                        >
                            <MenuItem 
                                style = {{backgroundColor:itemIndex===1?'lightGray':''}}
                                onClick = {()=> this._ChangeEventsTable (1)}
                                eventKey="1">All</MenuItem>
                            <MenuItem
                                onClick = {()=> this._ChangeEventsTable(2)}    
                                style = {{backgroundColor:itemIndex===2?'lightGray':''}} 
                                eventKey="2">Active promotion
                            </MenuItem>
                            <MenuItem
                                onClick = {()=> this._ChangeEventsTable(3)}    
                                style = {{backgroundColor:itemIndex===3?'lightGray':''}}
                                eventKey="3">Closed promotion</MenuItem>
                            <MenuItem
                                onClick = {()=> this._ChangeEventsTable(4)}    
                                style = {{backgroundColor:itemIndex===4?'lightGray':''}} 
                                eventKey="4">Future promotion</MenuItem>
                        </DropdownButton>
                    </div>

                    <div class="panel-body table-responsive" style={{ maxHeight: 300 }}>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Promotions Title</th>
                                    <th>Created Date</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Likes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.filterDataEventList.length===0? 'You have no promotion':
                                    this.state.filterDataEventList.map ((item,index)=>{
                                        return <EventItem 
                                        dataEvent = {item} 
                                        onGetDataForModalEventDetail = {this.props.onGetDataForModalEventDetail}
                                        onSwitchEventModal = {this.props.onSwitchEventModal}
                                        onGetEventComment = {this.props.onGetEventComment}
                                        />
                                    })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>



            </Fragment >

        )
    }
};
