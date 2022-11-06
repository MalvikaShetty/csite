import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

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

// import { Map, MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
// import React, { Component, useState, useRef } from 'react';
// import 'leaflet/dist/leaflet.css';

// function map() {
//     return(
// <MapContainer center={[40.505, -100.09]} zoom={13} >
  
//   <TileLayer
//     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//    />
//     <Marker position={[40.505, -100.09]}>
//       <Popup>
//         I am a pop-up!
//       </Popup>
//   </Marker>
// </MapContainer>

//     );

// }
// export default map;