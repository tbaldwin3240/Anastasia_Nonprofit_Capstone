import React from 'react';
import './Holder.css';
class HoverBox extends React.Component {
    render(){
        return (
                <div className='box'>
                <img className='imgbox' src={this.props.boximage}/>
                <div className='overlay'>
                <a href={this.props.boxlink}><h1 className='textbox'>{this.props.boxwords}</h1></a>
                </div>
                </div>
        )
    }
}
export default HoverBox;