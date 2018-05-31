import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
export default class ShopCard extends Component {
    render() {
        const {Store_Name,Store_District, Store_Street, Store_Status, Store_ImageLink} = this.props.dataShop
        return (
            <div class="col-xs-6 col-sm-6 col-md-3">
                <div class={`panel ${Store_Status===1?'panel-primary': 'panel-danger'}`}>
                    <div class="panel-heading">
                        <center><h3 class="panel-title">{Store_Name}</h3></center>
                    </div>
                    <div class="panel-body">
                        <center>
                            <img src={Store_ImageLink} class="img-responsive" alt="Image" style = {{height: 230}}/>
                        </center>
                      </div>

                    <div class="panel-footer" style = {{color:Store_Status===1?'blue': 'red'}}>
                            <LinesEllipsis
                                text={Store_Street}
                                maxLine='2'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            /> 
                      </div>
                </div>
            </div>
        )
    }
};
