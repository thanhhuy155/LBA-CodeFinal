import React, { Component } from 'react';
import CalendarEventCTT from '../../../constructors/shopOwner/ShopManagement/CalendarEventCTT'
import EventInformationCTT from '../../../constructors/shopOwner/ShopManagement/EventInformationCTT'
import TableOfEventsCTT from '../../../constructors/shopOwner/Statistics/TableOfEventsCTT'
import ModalEventDetailCTT from '../../../constructors/shopOwner/ShopManagement/ModalEventDetailCTT'
export default class StoreEventpage extends Component {
    render() {
        return (

            <div class="container-fluid">
                <ModalEventDetailCTT />
                <div class="row">
                    
                    <div class="col-xs-12 col-sm-6 col-md-5">
                        <EventInformationCTT/>
                    </div>

                    
                    <div class="col-xs-12 col-sm-12 col-md-7">
                        <TableOfEventsCTT />
                    </div>
                    
                    
                    
                </div>

                <br/>

                <div class="row">
                    
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <CalendarEventCTT/>
                    </div>
                </div>

            </div>

        )
    }
};
