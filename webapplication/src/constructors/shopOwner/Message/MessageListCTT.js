import React, { Component } from 'react';
import MessageList from '../../../components/shopOwner/Message/MessageList'
import {connect} from 'react-redux'
class MessageListCTT extends Component {
  render() {
    return (
      <MessageList />
    )
  }
};

export default connect (null,null) (MessageListCTT)
