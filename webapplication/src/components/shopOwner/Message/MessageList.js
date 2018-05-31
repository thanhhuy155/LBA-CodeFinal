import React, { Component, Fragment } from 'react';
import MessageItem from './MessageItem'
export default class MessageList extends Component {
    render() {
        return (
            <Fragment>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <ul class="pagination">
                    <li><a href="#">&laquo;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&raquo;</a></li>
                </ul>
            </Fragment>
        )
    }
};
