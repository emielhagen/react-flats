import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

class MapBoxMap extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pZWxnZW9jb2RlciIsImEiOiJjanc4Z2F5cWExd2JpNGJubmhxczJ2eDFqIn0.CUhbT7Qwi7wQTfVG1vT5Tg'
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.props.center,
      zoom: 11
    });
  }

  componentDidUpdate(){
    new mapboxgl.Marker({color: 'red' })
      .setLngLat(this.props.marker)
      .addTo(this.map);
  }

  render() {
    return(
      <div ref={el => this.mapContainer = el} className="mapContainer">
      </div>
    )
  }
}

export default MapBoxMap;
