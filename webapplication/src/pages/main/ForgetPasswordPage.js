import React, { Component } from 'react';
import EditPassWordCTT from '../../constructors/main/ForgetPassword/EditPassWordCTT'
import EnterEmailCTT from '../../constructors/main/ForgetPassword/EnterEmailCTT'
import EnterVaricationCodeCTT from '../../constructors/main/ForgetPassword/EnterVaricationCodeCTT'
export default class componentName extends Component {
  render() {
    return (
      <div div class="col-sm-8 col-sm-offset-2 text" style ={{marginTop:50}}>
        <EnterEmailCTT/>
        <EditPassWordCTT/>
        <EnterVaricationCodeCTT/>
      </div>
    )
  }
};
