'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import { useMap } from 'react-leaflet';

// Dynamically import Leaflet components to disable SSR
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const ZoomControl = dynamic(() => import('react-leaflet').then(mod => mod.ZoomControl), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });

const ZoomLogger = () => {
  const map = useMap();

  useEffect(() => {
    const onZoomEnd = () => console.log('Zoom level:', map.getZoom());
    map.on('zoomend', onZoomEnd);

    return () => {
      map.off('zoomend', onZoomEnd);
    };
  }, [map]);

  return null; // This component only adds event listeners
};

const Map = () => {
  return (
    <div className="w-full h-full">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        zoomControl={false} // Disable default controls
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomleft" />
        <ZoomLogger /> {/* Custom component to track zoom level */}
      </MapContainer>
    </div>
  );
};

export default Map;
