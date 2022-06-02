import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import YOUR_FRONT_CCOMPONENT from './Front_F';
import YOUR_BACK_COMPONENT from './Back_B';
import './Card.css'
// import Data from './data.json'



class FrontCard extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <YOUR_FRONT_CCOMPONENT>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_FRONT_CCOMPONENT>

        <YOUR_BACK_COMPONENT>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_BACK_COMPONENT>
      </ReactCardFlip>
    )
  }
}


export default FrontCard;

