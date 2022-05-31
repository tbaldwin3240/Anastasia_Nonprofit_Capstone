import React, {useState} from 'react';
import './App.css';
import Card from './components/Card'


function App() {
  const[name,setName] = useState('Your Name');
  const[job,setJob] = useState('Job Title');
  const[about,setAbout] = useState('I am who I say I am');



  return(
    <div className='App'>
    <Card name={'Mark Zukerberg'}job={'Facebook'} about={about}/>
    </div>
  );
}

export default App
