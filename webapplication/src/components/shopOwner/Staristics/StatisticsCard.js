import React, { Component } from 'react';

export default class StatisticsCard extends Component {
    render() {
        const { Color, Title, Content, Icon } = this.props.item
        return (
                <div class="col-xs-12 col-sm-4">
                    <div class="panel panel-default" style={{ backgroundColor: Color }}>
                        <div class="panel-body">
                            <center>
                            <div class="row">
                                <p style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>{Content}</p>
                            </div>

                            <div class="row">
                                <p style={{ color: 'white', fontSize: 15 }}> <span class="glyphicon glyphicon-icon" aria-hidden="true"></span> {Title}</p>
                            </div>
                            </center>
                        </div>
                    </div>
                </div>
        )
    }
};
