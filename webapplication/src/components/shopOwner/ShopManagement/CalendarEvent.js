import React, { Component } from 'react';
import moment from 'moment';
import ModalEventDetail from './ModalEventDetail'
import BigCalendar from 'react-big-calendar'
import { handleSplitDate } from '../../../constraints/HandleDate'
import { Link, Redirect } from 'react-router-dom'
import { handleCheckToday } from '../../../constraints/HandleDate'
BigCalendar.momentLocalizer(moment);

export default class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentWillMount() {
        const { dataEventsList } = this.props
        this.setState({
            events: dataEventsList.map((item) => {
                return {
                    idShop: item.Promotion_ID,
                    title: item.Promotion_Title,
                    allDay: true,
                    start: handleSplitDate(item.Promotion_DateStart),
                    end: handleSplitDate(item.Promotion_DateEnd),
                    images: item.Promotion_Image.split(','),
                    totalFavorite: item.Promotion_TotalFavorite,
                    status: item.Promotion_Status,
                    createdDate: handleSplitDate(item.Promotion_Created),
                    decription: item.Promotion_Description
                }
            })
        })
    }

    componentWillReceiveProps (nextProps){
        const { dataEventsList } = nextProps
            this.setState({
                events: dataEventsList.map((item) => {
                    return {
                        idShop: item.Promotion_ID,
                        title: item.Promotion_Title,
                        allDay: true,
                        start: handleSplitDate(item.Promotion_DateStart),
                        end: handleSplitDate(item.Promotion_DateEnd),
                        images: item.Promotion_Image.split(','),
                        totalFavorite: item.Promotion_TotalFavorite,
                        status: item.Promotion_Status,
                        createdDate: handleSplitDate(item.Promotion_Created),
                        decription: item.Promotion_Description
                    }
                })
            })
    }

    eventStyleGetter = (color, start, end, isSelected) => {
        const CheckDate = handleCheckToday(start, end)
        console.log (`start: ${start}, end: ${end},CheckDate ${CheckDate} `)
        var statusEvent = '#FFCDD2'
        if (CheckDate === 0)
            statusEvent = '#C8E6C9'
        else if (CheckDate === 1)
            statusEvent = '#F0F4C3'
        var style = {
            backgroundColor: statusEvent,
            borderRadius: 10,
            opacity: 0.8,
            color: 'black',
            fontWeight: 'bold',
            border: '0px',
            display: 'block'
        };
        return {
            style: style
        };
    }

    _openModalEventDetail = (SentEvent) => {
        this.props.onGetDataForModalEventDetail (SentEvent)
        this.props.onSwitchEventModal ()
        this.props.onGetEventComment (SentEvent.idShop,1)
    }

    render() {
        return (
            <div style={{ height: 500 }}>
                <BigCalendar
                    defaultDate={new Date()}
                    events={this.state.events}
                    step={60}
                    onSelectEvent={(event, e) => {
                        this._openModalEventDetail(event)
                    }}
                    eventPropGetter={(this.eventStyleGetter)}
                    views={['month', 'day']}
                />
            </div>

        )

    }
}

