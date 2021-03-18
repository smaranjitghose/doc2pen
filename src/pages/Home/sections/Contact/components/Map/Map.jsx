import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, LayersControl } from "react-leaflet";
import "./Map.css";
import { FiCrosshair } from "react-icons/fi";
const position = [13.0827, 80.2707];

function reCenter(map) {
  map.flyTo(position, map.getZoom());
}

function Comp() {
  const map = useMap();

  return (
    <button className="reCenter" onClick={() => reCenter(map)}>
      <FiCrosshair size={30} color="rgb(0, 153, 255)" />
    </button>
  );
}

function Map() {
  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
      <div className="mapToolTip">
        <p>Doc2Pen</p>
        <br />
        <br />
        <a href="mailto:contact@doc2pen.org">contact@doc2pen.org</a>
      </div>
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="OSM Light">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
        <LayersControl.BaseLayer checked name="Thunderfrost">
          <TileLayer
            url="https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Alidade Dark">
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Stamen Dark">
          <TileLayer
            url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Carto Dark">
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
        </LayersControl.BaseLayer>
        <Marker position={position}>
          <Popup>
            <p>Doc2Pen</p>
            <a href="mailto:contact@doc2pen.org">contact@doc2pen.org</a>
          </Popup>
        </Marker>
      </LayersControl>
      <Comp />
    </MapContainer>
  );
}

export default Map;
