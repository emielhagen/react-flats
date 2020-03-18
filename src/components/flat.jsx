import React, { Component } from 'react';

class Flat extends Component {
  handleClick = (flat) => {
    this.props.setCrd(flat)
  }

  render(){
    return(
      <div className="card" style={{backgroundImage:`url(${this.props.flat.imageUrl})`}} onClick={() => this.handleClick(this.props.flat) }>
        <div className="card-category">
          {this.props.flat.price} EUR
        </div>
        <div className="card-description">
          <h2>
            {this.props.flat.name}
          </h2>
          <a className="card-link" href="#"></a>
        </div>
      </div>
    )
  }
}

export default Flat;
