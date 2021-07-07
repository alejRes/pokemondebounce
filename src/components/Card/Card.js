import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="Card">
        <h2>{this.props.data.name}</h2>
        <img src={this.props.data.sprites.other.dream_world.front_default} alt={this.props.data.name} srcset="" /> 
        <p>tipo: {this.props.data.types[0].type.name}</p>
      </div>
    );
  }
}

export default Card;