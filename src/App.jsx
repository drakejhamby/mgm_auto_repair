import './App.css'
import Landing_en from './components/Landing_en';
import Landing_es from './components/Landing_es';
import Services_en from './components/Services_en';
import Servicios_es from './components/Servicios_es';
import {useState} from 'react';

function App() {

  const [english, setEnglish] = useState(true);

  function handleClick() {
    setEnglish(!english);
  }

if(english){
return (
  <div>
    <button onClick={handleClick}>Espanol</button>
    <Landing_en />
    <Services_en />
  </div>
)} else {
  return (
    <div>
      <button onClick={handleClick}>English</button>
      <Landing_es />
      <Servicios_es />
    </div>
  )
}

}

export default App
