import React from "react";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMap,
	LayersControl,
	useMapEvent,
} from "react-leaflet";
import "./map.scss";
import { FiCrosshair } from "react-icons/fi";
const position = [13.0827, 80.2707];

function ReCenterButton() {
	const map = useMap();

	return (
		<label title="Re Center">
			<button
				className="reCenter"
				onClick={() => map.flyTo(position, map.getZoom())}
			>
				<FiCrosshair size={30} color="#cccccc" />
			</button>
		</label>
	);
}

function SetViewOnClick() {
	const map = useMapEvent("click", e => {
		map.setView(e.latlng, map.getZoom(), {
			animate: true,
		});
	});

	return null;
}

const MapLayers = () => {
	return (
		<LayersControl position="topright">
			<LayersControl.BaseLayer name="OSM Light">
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
			</LayersControl.BaseLayer>
			<LayersControl.BaseLayer checked name="Thunderfrost">
				<TileLayer url="https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png" />
			</LayersControl.BaseLayer>
			<LayersControl.BaseLayer name="Alidade Dark">
				<TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
			</LayersControl.BaseLayer>
			<LayersControl.BaseLayer name="Stamen Dark">
				<TileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png" />
			</LayersControl.BaseLayer>
			<LayersControl.BaseLayer name="Carto Dark">
				<TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
			</LayersControl.BaseLayer>
			<Marker position={position}>
				<Popup>
					<p>Doc2Pen</p>
					<a href="mailto:contact@doc2pen.org">contact@doc2pen.org</a>
				</Popup>
			</Marker>
		</LayersControl>
	);
};

const MapTooltip = () => {
	return (
		<div className="mapToolTip">
			<p>Doc2Pen</p>
			<br />
			<br />
			<a href="mailto:contact@doc2pen.org">contact@doc2pen.org</a>
		</div>
	);
};

function MapPlaceholder() {
	return (
		<p>
			Map of Chennai, India.
			<noscript>You need to enable JavaScript to see this map.</noscript>
		</p>
	);
}

function Map() {
	return (
		<>
			<MapContainer
				center={position}
				zoom={15}
				scrollWheelZoom={false}
				placeholder={<MapPlaceholder />}
			>
				<MapTooltip />
				<MapLayers />
				<ReCenterButton />
				<SetViewOnClick />
			</MapContainer>
		</>
	);
}

export default Map;
