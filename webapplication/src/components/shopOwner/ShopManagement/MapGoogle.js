import React, { Component } from 'react';
import {Map, InfoWindow , Marker, GoogleApiWrapper} from 'google-maps-react'


export class Maps extends Component {
  render (){
  const {Store_Latitude, Store_Longitude} = this.props
    return (
      <Map
        style = {{width:'100%',height:'50vh',position:'relative'}} 
        google = {this.props.google} 
        class = {'map'}
        initialCenter={{
          lat: Store_Latitude,
          lng: Store_Longitude
        }}
        center = {{
          lat: Store_Latitude,
          lng: Store_Longitude
        }}
        zoom = {16}
        > 
        <Marker 
          title= {'The Blue'}
          position = {{lat: Store_Latitude, lng: Store_Longitude}}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({apiKey:'AIzaSyC9vBvydW5J7JJsnQS_do_tKmLlzdCHA4k'})(Maps);

