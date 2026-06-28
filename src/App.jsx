import './App.css'
import Landing_en from './components/Landing_en';
import Landing_es from './components/Landing_es';
import Services_en from './components/Services_en';
import Servicios_es from './components/Servicios_es';
import Contact_en from './components/Contact_en';
import Contacto_es from './components/Contacto_es';
import About from './components/About';
import About_es from './components/About_es';
import argentinaFlag from './assets/argentina.png';
import usaFlag from './assets/united-states.png';
import {useState} from 'react';

function App() {

  const [english, setEnglish] = useState(true);

  function handleClick() {
    setEnglish(!english);
  }



if(english){
return (
  <div className="app">
    <button className="language-toggle" onClick={handleClick}>
      <img className="language-flag" src={argentinaFlag} alt="Argentina flag" />
      <span>Espanol</span>
    </button>
    <div className="app-section app-section-landing">
      <Landing_en />
    </div>
    <div className="app-section app-section-about">
      <About />
    </div>
    <div className="app-section app-section-services">
      <Services_en />
    </div>
    <div className="app-section app-section-contact">
      <Contact_en />
    </div>
  </div>
)} else {
  return (
    <div className="app">
      <button className="language-toggle" onClick={handleClick}>
        <img className="language-flag" src={usaFlag} alt="United States flag" />
        <span>English</span>
      </button>
      <div className="app-section app-section-landing">
        <Landing_es />
      </div>
      <div className="app-section app-section-about">
        <About_es />
      </div>
      <div className="app-section app-section-services">
        <Servicios_es />
      </div>
      <div className="app-section app-section-contact">
        <Contacto_es />
      </div>
    </div>
  )
}

}

export default App
