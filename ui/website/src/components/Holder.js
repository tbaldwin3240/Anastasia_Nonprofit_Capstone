import React from 'react';
import './Holder.css';
import HoverBox from './HoverBox';




class Holder extends React.Component {
    render(){
        return (
            <div style={{background:'green', width: '100vw', height: '100vh'}}>
            <h1 style={{color:'white'}}> Holder</h1>
        <div className='body'>
            <div className='divflex'>

            <HoverBox
                boximage=''
                boxlink=''
                boxwords='super mario'
            /> 
             <HoverBox
                boximage=''
                boxlink=''
                boxwords='super mario'
            /> 
             <HoverBox
                boximage=''
                boxlink=''
                boxwords='super mario'
            />
             <HoverBox
                boximage=''
                boxlink=''
                boxwords='super mario'
            />

                </div>
            </div>
        </div>
        )
    }
}
export default Holder;