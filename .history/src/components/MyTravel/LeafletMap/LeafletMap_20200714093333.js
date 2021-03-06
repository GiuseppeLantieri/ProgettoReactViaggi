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

  let latitudine = 0;
  let longitudine = 0;
  contesto.citta.forEach(citta => {
    latitudine += citta.posizione.latitudine;
    longitudine += citta.posizione.longitudine;
  });
  latitudine = latitudine/citta.length;
  const resize = () => {
    setZoom((window.innerWidth <= 760)? 7 : 8);
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
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
        contesto.citta.map((citta,i) => 
          <Marker key={i} position={[citta.posizione.latitudine, citta.posizione.longitudine]}>
            <Popup><p className="tinyText text-center">{citta.nome}</p></Popup>
          </Marker>
        )
      }
    </Map>
  );
}