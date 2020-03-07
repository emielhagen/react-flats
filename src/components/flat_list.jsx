import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {
  renderList(){
    return this.props.flats.map(flat => <Flat flat={flat} key={flat.name}/>);
  }

  render(){
    return(
      this.renderList()
    )
  }
}

export default FlatList;
