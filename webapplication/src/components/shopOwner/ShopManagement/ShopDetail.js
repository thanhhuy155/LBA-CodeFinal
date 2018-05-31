import React, { Component } from 'react';
import Maps from './MapGoogle'
import MyCalendar from './CalendarEvent'
import ModalCreateEvent from './ModalCreateEvent'
import ModalChangeInformation from './ModalChangeInformation'
import ModalPayment from './ModalPayment'
export default class ShopDetail extends Component {
  render() {
    return (
      
      <div class="container-fluid">
          
            <div class="row">
                <h1>The Blues</h1>
                <h4><span class="label label-danger">Locked</span></h4>
                <div class="col-sm-6 col-md-3">
                    
                    <img src="http://giaiphaptinhhoa.com/wp-content/uploads/2012/11/Blue.jpg" class="img-responsive" alt="Image"/>
                    
                </div>
                  
                <div class="col-sm-6 col-md-5">
                    <h5><strong>Information of Shop</strong></h5>
                    
                    <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" href='#modal-ChangeInformation'>Change Information</button> &nbsp;
                    <button type="button" class="btn btn-sm btn-warning" data-toggle="modal" href='#modal-payment'>Payment</button>
                    <br/>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td class="col-xd-2 col-md-4"><strong>Name of Shop:</strong></td>
                                <td class="col-xd-2 col-md-8">The Blue</td>
                            </tr>

                            <tr>
                                <td class="col-xd-2 col-md-2"><strong>Type of Shop:</strong></td>
                                <td class="col-xd-2 col-md-10">Cloths Shop</td>
                            </tr>

                            <tr>
                                <td class="col-xd-2 col-md-2"><strong>Phone Number of Shop:</strong></td>
                                <td class="col-xd-2 col-md-10">Something</td>
                            </tr>

                            <tr>
                                <td class="col-xd-2 col-md-2"><strong>Open Time:</strong></td>
                                <td class="col-xd-2 col-md-10">Something</td>
                            </tr>

                            <tr>
                                <td class="col-xd-2 col-md-2"><strong>Close Time:</strong></td>
                                <td class="col-xd-2 col-md-10">Something</td>
                            </tr>

                            <tr>
                                <td class="col-xd-2 col-md-2"><strong>Open Day:</strong></td>
                                <td class="col-xd-2 col-md-10">Every day</td>
                            </tr>

                            <tr>
                                <td class="col-xd-2 col-md-2"><strong>Street:</strong></td>
                                <td class="col-xd-2 col-md-10">115 Đống Đa</td>
                            </tr>

                            <tr>
                                <td class="col-xd-2 col-md-2"><strong>Distict:</strong></td>
                                <td class="col-xd-2 col-md-10">Phường Thanh Bình, Quận Hải Châu, TP. Đà Nẵng</td>
                            </tr>

                            <tr>
                                <td class="col-xd-2 col-md-2"><strong>Price min:</strong></td>
                                <td class="col-xd-2 col-md-8">Something</td>
                            </tr>

                            <tr>
                                <td class="col-xd-2 col-md-2"><strong>Price max:</strong></td>
                                <td class="col-xd-2 col-md-8">5000</td>
                            </tr>

                            <tr>
                                <td class="col-xd-2 col-md-2"><strong>Description:</strong></td>
                                <td class="col-xd-2 col-md-10">10000</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                
                <div class="col-xs-12 col-sm-12 col-md-4">
                    <h5><strong>Your position: </strong></h5>
                    <Maps isMarkerShown/>

                </div>
      
            </div>
            <ModalChangeInformation />
            <ModalCreateEvent/>
            <ModalPayment />
            
            <div class="row">
                <h5><strong>Event of Shop</strong> <button type="button" class="btn btn-success"  data-toggle="modal" href='#modal-CreateEvent'>Create Event</button></h5>
                <MyCalendar />
                             
            </div>
            
  
    </div>
          
      
    )
  }
};
