"use client";

import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import { useMap } from "react-leaflet";
import { PopupCard } from "./popup-card";

// Dynamically import Leaflet components to disable SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const ZoomControl = dynamic(
  () => import("react-leaflet").then((mod) => mod.ZoomControl),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const ZoomLogger = () => {
  const map = useMap();

  useEffect(() => {
    const onZoomEnd = () => console.log("Zoom level:", map.getZoom());
    map.on("zoomend", onZoomEnd);

    return () => {
      map.off("zoomend", onZoomEnd);
    };
  }, [map]);

  return null;
};

const Map = ({ guardposts = [] }) => {
  return (
    <div className="w-full h-full">
      <MapContainer
        center={[-6.195038424697565, 106.82294134838708]}
        zoom={16}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {guardposts.map((post) => (
          <Marker position={[post.lat, post.long]} key={post.id}>
            <Popup>
              <PopupCard
                name={post.name}
                lat={post.lat}
                long={post.long}
              />
            </Popup>
          </Marker>
        ))}
        <ZoomControl position="bottomleft" />
        <ZoomLogger />
      </MapContainer>
    </div>
  );
};

export default Map;
