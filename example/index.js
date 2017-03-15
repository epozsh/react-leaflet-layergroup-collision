import React from 'react';
import { render } from 'react-dom';
import LayerGroupCollisionExample from "./LayerGroupCollision";



const example = (
  <div>
    <h1>React-Leaflet-LayerGroupCollision Example</h1>
    <LayerGroupCollisionExample/>
  </div>
)

render(example, document.getElementById('app'));