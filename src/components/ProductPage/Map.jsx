import { useEffect } from "react";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
    return (
        <div id="map">
            <MapContainer
                center={[28.613, 77.208]}
                zoom={13}
                style={{ height: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[28.613, 77.208]}>
                    <Popup>A random place</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
