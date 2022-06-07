import React from 'react';
import './Holder.css';
import HoverBox from './HoverBox';
import icon1 from './img/IMG_8124.jpg'
import icon2 from './img/IMG_8072.jpg' 
import icon3 from './img/IMG_8126.jpg'
import icon4 from './img/IMG_8131.jpg'
import icon5 from './img/image0.jpeg'
import icon6 from './img/IMG_8196.jpg'

class Holder extends React.Component {
    render(){
        return (
            <div style={{background:'white', width: '100vw', height: '1500px'}}>
            <h1 style={{color:'white'}}></h1>
        <div className='body'>
            <div className='divflex'>

            <HoverBox
                boximage={icon1}
                boxlink=''
                boxwords='The curry chicken was my favorite. The chicken was juicy and seasoned to perfection
-Teacher'
            /> 
            <HoverBox
                boximage={icon2}
                boxlink=''
                boxwords='The marinated steak and peppers with onions were amazing.The rice that was paired with was great side dish'
            /> 
        
            <HoverBox
                boximage={icon3}
                boxlink=''
                boxwords='I had the pleasure of eating a couple different meals from this group. I truly enjoyed the baked chicken & fish. Mash potatoes, mac & cheese, and I can’t forget about the strawberry shortcake.
                Thank  you for the great food - Shannon'
            /> 
            <HoverBox
                boximage={icon4}
                boxlink=''
                boxwords='The food was great! I really like the chimmichun sauce on thee meat and the way the class seasoned their potatoes.'
            />
             <HoverBox
                boximage={icon5}
                boxlink=''
                    boxwords='Great food, always on point!
                    Enjoy the Veggies seasonal well!
                    The Desserts are always great!'
            /> 
            <HoverBox
                boximage={icon6}
                boxlink=''
                boxwords='Asparagus,
                Baked chicken,and rice.
                Was very Delicious and filling.
                Restaurant quality food!'
            />
                </div>
            </div>
        </div>
        )
    }
}
export default Holder;