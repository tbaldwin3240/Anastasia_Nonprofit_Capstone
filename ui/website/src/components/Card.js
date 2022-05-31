import React,{useState} from 'react'
import './Card.css'

function Card(name,about,job) {
    const [name,setName] = useState('YourName');
    const [job,setJob] = useState('Job Title');
    const [about,setAbout] = useState('It is I and I am him');


  return (
    <div className='Card'>
        <div className='upper-container'>
            <div className='image container'>
                <img src="https://files.startupranking.com/person/thumb/1_d92ba75cdf8b076314adb370c2a1707e1dc34ba5_mark-zuckerberg_m.jpeg" alt='' height= "100px" wiidth=" 100px"/>
            </div>
        </div>
        <div className="lower-container">
            <h3> {name} </h3>
            <h4> {job} </h4>
            <p> {about} </p>
            <button> Visit Profile </button>
        </div>
    </div>
  )
}

export default Card