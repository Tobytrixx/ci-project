/*Importing components and dependencies*/
import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import "../styles/map.css";

/*declaring map function*/
const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us Today</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map; //exporting map function as component//