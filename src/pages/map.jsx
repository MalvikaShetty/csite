// import React, {useState} from "react";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import '../App.css';
// import { Icon } from "leaflet";
// // import * as parkData from "./data/skateboard-parks.json";

// function map() {
//   return (
//     <MapContainer center={[45.4, -75.7]} zoom={12}scrollWheelZoom={false}>
//       <TileLayer
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       />
//     </MapContainer>
//   );
// }

// export default map;
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker,GoogleMapReact } from 'google-maps-react';

class MapPage extends Component {
    state = { 
      stores: [{latitude: 40.99603862999985, longitude: -74.77866767353785},
        {latitude: 40.96187376463975, longitude: -74.73591156004433},
        {latitude: 40.68284783162385, longitude: -74.89560528888862},
        {latitude: 40.16550136754856, longitude: -74.14629906249034},
        {latitude: 41.19045390628477, longitude: -74.73060250236652}]
    }
    
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }

    render() {
      return (
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 40.717, lng: -74.185}}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
}
 
const mapStyles = {
  width: '100%',
  height: '100%',
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBCP6TPKY-63aGpqrcBZN3EC6zwmVm3rMc'
  })(MapPage);