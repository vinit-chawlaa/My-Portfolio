import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Background from './Background';
import Skills from './Skills';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';

function App() {
  
  useEffect(()=>{
    Aos.init({
      once : true
    });
    
  },[])
  return (
    <div className="App">
    <Navbar/>
    <Background/>
    <Projects/>
    <Contact/>
    <Skills/>
    <About/>
    </div>
  );
}

export default App;
