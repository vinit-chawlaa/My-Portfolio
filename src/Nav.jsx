import React, { useEffect, useState } from 'react';
import './App.css'; // CSS file for styling
import { FaBars, FaTimes } from 'react-icons/fa';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activelink, setActivelink] = useState("home");

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
 const closemenu = () =>{
  setIsOpen(false)
 }

  if(isOpen)
  {
    document.addEventListener("click", closemenu)
  }

  return () => {
    document.removeEventListener("click",closemenu)
  }

  },[isOpen])

  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="1000">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
        <img src={`${process.env.PUBLIC_URL}/images/32.jpg`} alt="" className="imgs3"/>
          <span className="navbar-logo-text">Vinit</span>
        </div>

        {/* Desktop Links */}
        <ul className={`navbar-links ${isOpen ? 'navbar-links-mobile' : ''}`}>
          <li><a href="#home" className={activelink === "home" ? "active" : ""} onClick={() => { setIsOpen(false); setActivelink("home"); window.scrollTo(0, 0); }}>Home</a></li>
          <li><a href="#projects" className={activelink === "Projects" ? "active" : ""} onClick={() => { setIsOpen(false); setActivelink("Projects");}}>Projects</a></li>
          <li><a href="#contact" className={activelink === "Contact" ? "active" : ""} onClick={() => { setIsOpen(false); setActivelink("Contact");}}>Contact</a></li>
          <li><a href="#skills"className={activelink === "Skills" ? "active" : ""} onClick={() => { setIsOpen(false); setActivelink("Skills");}}>Skills</a></li>
          <li><a href="#about" className={activelink === "About" ? "active" : ""} onClick={() => { setIsOpen(false); setActivelink("Abouts");}}>About</a></li>
        </ul>



        {/* Hamburger Icon */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
    
  );
};

export default Nav;
