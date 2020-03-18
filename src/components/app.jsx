import React, { Component } from 'react';
import flats from '../../data/flats.js'
import FlatList from './flat_list.jsx';
import MapBoxMap from './map_box_map.jsx'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      center: null,
      flats: flats,
      marker: null
    }
  }

  setCrd = (flat) => {
    this.setState({
      center: [flat.lng, flat.lat],
      marker: [flat.lng, flat.lat]
    })
    console.log(this.state.center)
  }

  render(){
    return(
      <div>
        <div className="left-scene">
          <div className="flat-list">
            <FlatList flats={this.state.flats} setCrd={this.setCrd} />
          </div>
        </div>
        <div className="right-scene">
          <MapBoxMap marker={this.state.marker} center={this.state.center ? this.state.center : [2.343371, 48.88184]} />
        </div>
      </div>
    )
  }
}

export default App;
