import React, { Component } from 'react';
import MapGoogleCTT from '../../../constructors/shopOwner/ShopManagement/MapGoogleCTT'
import ModalChangeInformation from '../../../components/shopOwner/ShopManagement/ModalChangeInformation'
import TableShopInformationCTT from '../../../constructors/shopOwner/ShopManagement/TableShopInformationCTT'
import PictureShopCTT from '../../../constructors/shopOwner/ShopManagement/PictureShopCTT'
import ViewChartCTT from '../../../constructors/shopOwner/ShopManagement/ViewChartCTT'
import ViewChartOfMonthCTT from '../../../constructors/shopOwner/Statistics/ViewChartOfMonthCTT'
import ViewChartOfYearCTT from '../../../constructors/shopOwner/Statistics/ViewChartOfYearCTT'
export default class StoreInformation extends Component {
    render() {
        return (
            <div class={'container-fluid'}>
                <div class="row">
                    <div class="col-sm-6 col-md-3">
                        <PictureShopCTT/>

                    </div>

                    <div class="col-sm-6 col-md-5">
                        <TableShopInformationCTT/>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <h5><strong>Your position: </strong></h5>
                        <MapGoogleCTT />

                    </div>
                </div>

                
                <div class="row">
                    
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ViewChartOfYearCTT/>
                    </div>
                    
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ViewChartOfMonthCTT/>
                    </div>
                </div>
                
                <ModalChangeInformation />
                
            </div>
        )
    }
};
