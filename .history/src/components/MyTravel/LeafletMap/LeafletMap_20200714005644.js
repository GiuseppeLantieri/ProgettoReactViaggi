import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../../../MyContext';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './leafletmap.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function LeafletMap() {
  const contesto = useContext(MyContext);
  const [zoom,setZoom] = useState(8);

  const resize = () => {
    setZoom((window.innerWidth <= 760)? 7 : 8);
  }

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    //su mobile zoom 7
    <Map center={[37.483616, 14.105787]} zoom={zoom} zoomControl={false} doubleClickZoom={false}
      closePopupOnClick={false}
      dragging={false}
      zoomSnap={false}
      zoomDelta={false}
      touchZoom={false}
      scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {
        contesto.citta.map(citta => 
          <Marker position={[citta.posizione.latitudine, citta.posizione.longitudine]}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
        )
      }
    </Map>
  );
}

/*
import * as React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export const MyMapComponent = (props) => {
    return (
        <Map center={props.center} zoom={props.zoom} style={{height: '350px'}}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          />
          <Marker position={props.center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
    )
}

*/