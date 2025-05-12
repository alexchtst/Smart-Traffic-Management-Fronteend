"use client";

import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import { useMap } from "react-leaflet";
import { AppContext } from "@/context/AppContext";
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

  return null; // This component only adds event listeners
};

const Map = () => {
  const { guardpostdata } = useContext(AppContext);

  return (
    <div className="w-full h-full">
      <MapContainer
        center={[guardpostdata.xpos, guardpostdata.ypos]}
        // center={[-7.789047490723618, 110.43031471401336]}
        zoom={13}
        zoomControl={false} // Disable default controls
        scrollWheelZoom={false}
        doubleClickZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-7.758315006983358, 110.39739904264715]}>
          <Popup>
            <PopupCard
              name={"test position 1"}
              lat={-7.758315006983358}
              long={110.39739904264715}
            />
          </Popup>
        </Marker>
        <Marker position={[-7.789047490723618, 110.43031471401336]}>
          <Popup>
            <PopupCard
              name={guardpostdata.name}
              lat={-7.789047490723618}
              long={110.43031471401336}
            />
          </Popup>
        </Marker>
        <ZoomControl position="bottomleft" />
        <ZoomLogger />
      </MapContainer>
    </div>
  );
};

export default Map;
