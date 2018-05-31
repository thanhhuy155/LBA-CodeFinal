import React, { Component, Fragment } from 'react';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng} from 'react-places-autocomplete'

export default class InputLocation extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { 
        address: '',
        lat: '',
        lng: '',
        district: ''    
    }
  }

  componentWillMount (){
      if (this.props.currentAddress){
          this.setState ({
              address: this.props.currentAddress
          })
      }
  }

  handleChange = (address) => {
    this.setState({ address })
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState ({
          lat: latLng.lat,
          lng:latLng.lng
      }, () =>{
            this.props.handleShopPosition (address,this.state.lat, this.state.lng)
      }))
      .catch(error => console.error('Error', error))
  }

  render() {
    return (
    <Fragment>
    
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input form-control'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                            ? { backgroundColor: 'lightBlue', cursor: 'pointer' }
                            : { backgroundColor: '', cursor: 'pointer' };
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
        
      </PlacesAutocomplete>
    </Fragment>
    );
  }
}
