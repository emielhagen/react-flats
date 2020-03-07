import React, { Component } from 'react';
import flats from '../../data/flats.js'
import FlatList from './flat_list.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      flats: flats
    }
  }

  render(){
    return(
      <div>
        <div className="left-scene">
          <div className="flat-list">
            <FlatList flats={this.state.flats} />
          </div>
        </div>
        <div className="right-scene">
        </div>
      </div>
    )
  }

}

export default App;
