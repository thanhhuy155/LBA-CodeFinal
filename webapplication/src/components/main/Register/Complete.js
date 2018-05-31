import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Complete extends Component {

  _handleLogin = ()=>{
    this.props.onNextProgressBar(-1)
  }
  render() {
    const {positionProgressBar,onNextProgressBar} = this.props
    return (
      <div style ={{display: positionProgressBar===2?'':'none'}}>
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title text-center">Congratulations!</h3>
          </div>
          <div class="panel-body">
            <p>You have registered successfully.</p>
            <p>Please click "Login" to start creating your shop.</p>
          </div>
          <div class="pull-right">
            
            <Link to = "Login">
              <a class="btn btn-primary" role="button">Login</a>
            </Link>
            
          </div>
        </div>
      </div>
    )
  }
};
