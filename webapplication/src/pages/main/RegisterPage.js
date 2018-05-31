import React, { Component } from 'react';
import CompleteCTT from '../../constructors/main/Register/CompleteCTT'
import InformationCTT from '../../constructors/main/Register/InformationCTT'
import ProcessBarCTT from '../../constructors/main/Register/ProcessBarCTT'
import VerificationCTT from '../../constructors/main/Register/VerificationCTT'
export default class RegisterPage extends Component {
  render() {
    return (
      <div 
        class="col-sm-8 col-sm-offset-2 text" style= {{marginTop:50}}>
        <h3 class = "text-center"><strong>Register</strong></h3>
          <ProcessBarCTT />
          <InformationCTT/>
          <VerificationCTT/>
          <CompleteCTT/>
      </div>
    )
  }
};
