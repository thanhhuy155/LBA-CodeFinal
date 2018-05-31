import React, { Component } from 'react';
import ClientCommentListCTT from '../../../constructors/shopOwner/ShopManagement/ClientCommentListCTT'
export default class ClientCommentPage extends Component {
  render() {
    return (
      <div class="container-fluid">
        
        <div class="row">
          
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ClientCommentListCTT/>
          </div>
          
        </div>
        
      </div>
      
    )
  }
};
