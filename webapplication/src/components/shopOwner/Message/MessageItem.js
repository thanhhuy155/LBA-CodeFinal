import React, { Component } from 'react';

export default class MessageItem extends Component {
    render() {
        return (
            <div class="panel panel-default" style={{ marginBottom: 10, marginTop: 10, padding: 10, backgroundColor: '#EEEEEE' }}>
                <div class="panel-body">
                    <span>
                        <strong>{`From: ${'Admin'}`}</strong>
                        <p>20-Mar-2018 At 9 A.M</p>
                    </span>
                    <i>
                        Your Shop is Crack.
                    </i>
                </div>
            </div>
        )
    }
};
