import React, { Component } from 'react';

export default class ModalPayment extends Component {
  render() {
    return (
    
      <div class="modal fade" id="modal-payment">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header" style = {{backgroundColor:'lightYellow'}}>
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      <center><h4 class="modal-title"><strong>Modal title</strong></h4></center>
                  </div>
                  <div class="modal-body">
                      
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
              </div>
          </div>
      </div>
      
    )
  }
};
