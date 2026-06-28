import './App.css'
import Landing_en from './components/Landing_en';
import Landing_es from './components/Landing_es';
import Services_en from './components/Services_en';
import Servicios_es from './components/Servicios_es';
import Contact_en from './components/Contact_en';
import Contacto_es from './components/Contacto_es';
import About from './components/About';
import About_es from './components/About_es';
import {useState} from 'react';

function App() {

  const [english, setEnglish] = useState(true);

  function handleClick() {
    setEnglish(!english);
  }



if(english){
return (
  <div className="app">
    <button className="language-toggle" onClick={handleClick}>Espanol</button>
    <div className="app-section">
      <Landing_en />
    </div>
    <div className="app-section">
      <About />
    </div>
    <div className="app-section">
      <Services_en />
    </div>
    <div className="app-section app-section-contact">
      <Contact_en />
    </div>
  </div>
)} else {
  return (
    <div className="app">
      <button className="language-toggle" onClick={handleClick}>English</button>
      <div className="app-section">
        <Landing_es />
      </div>
      <div className="app-section">
        <About_es />
      </div>
      <div className="app-section">
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
