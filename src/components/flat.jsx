import React, { Component } from 'react';

class Flat extends Component {
  render(){
    return(
      <div className="card" style={{backgroundImage:`url(${this.props.flat.imageUrl})`}}>
        {this.props.flat.name}
      </div>
    )
  }
}

export default Flat;
