import React, { PropTypes } from 'react';
import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import './collision.js';

export default class LayerGroupCollision extends MapLayer {
  static childContextTypes = {
    layerContainer: PropTypes.shape({
      addLayer: PropTypes.func.isRequired,
      removeLayer: PropTypes.func.isRequired,
    })
  }

  getChildContext() {
    return {
      layerContainer: this.leafletElement,
    }
  }
  createLeafletElement() {
    var t = L.layerGroup.collision({ margin: 20 }, this.getOptions());
    this.layerContainer.addLayer(t);
    return t;
  }

  componentDidMount() {
    const {map} = this.context;
    map.on("zoomend", this._onZoomEnd, this);
  }

  componentWillUnmount() {
    const {map} = this.context;
    map.off("zoomend", this._onZoomEnd, this);
  }
}