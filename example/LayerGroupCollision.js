import React from 'react';
import { Map, TileLayer, FeatureGroup, Marker } from 'react-leaflet'
import { LayerGroupCollision } from '../src'
import { divIcon, GeoJSON } from 'leaflet'
//import './natural_earth_data/all';
//import './natural_earth_data/major';
import cities from './natural_earth_data/greece';

export default class LayerGroupCollisionExample extends React.Component {
  constructor() {
    super();
    this.state = {
      latngs: []
    }
  }

  render() {
    const icon_1 = divIcon({ className: 'divicon_1' });
    const icon_2 = divIcon({ className: 'divicon_2' });
    return (
      <Map center={[45.616037, 15.951813]} zoom={1} zoomControl={true}>
        <TileLayer
          url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <LayerGroupCollision>
        {cities.features.map((item, index) => {
          var labelClass = 'city-label city-label-' + item.properties.scalerank;
          return <Marker key={index} position={GeoJSON.coordsToLatLng(item.geometry.coordinates)} icon={divIcon({
            html:
            "<span class='" + labelClass + "'>" +
            item.properties.name +
            "</span>"
          })} />
        })}
        </LayerGroupCollision>
        {/*<LayerGroupCollision>
          <Marker position={[50.14874640066278, 14.106445312500002]} icon={icon_1} />
        </LayerGroupCollision>
        <LayerGroupCollision>
          <Marker position={[50.04874640066278, 14.106445312500002]} icon={icon_2} />
        </LayerGroupCollision>*/}
      </Map>
    )
  }
}