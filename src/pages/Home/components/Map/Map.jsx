import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

function Map() {
  const position = [13.0827, 80.2707];
  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
      <div className="mapToolTip">
        <p>Smaranjit Ghose</p>
        <br />
        <p>Chennai, India</p>
        <br />
        <br />
        <a href="https://smaranjitghose.codes/">smaranjitghose.codes</a>
      </div>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Smaranjit Ghose
          <br />
          Chennai, India
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
