import { useState, useEffect } from "react";
import './App.css';

const Navbar = () => {
  const [activelink, setActivelink] = useState("home");
  const [menubar, setMenubar] = useState(false);

  const handlebar = (e) => {
    e.stopPropagation();
    setMenubar(prev => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      // Automatically hide the menu when the screen is wide enough
      if (window.innerWidth > 924) {
        setMenubar(false); // Hide the menu when the width is more than 924px
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(()=>{
   const handlewindowclick = () =>{
    setMenubar(false)
   }

   window.addEventListener("click", handlewindowclick)
   return () => {
    window.removeEventListener("click", handlewindowclick)
   }
  },[menubar])

  return (
    <div>
      <nav className="Navbar" data-aos="fade-down" data-aos-duration="1000">
      <div className="navbar-container">
        <div className="mylogo">
        <img src={`${process.env.PUBLIC_URL}/images/32.jpg`} alt="" className="img1" />
          <h2>Vinit</h2>
        </div>

        <ul className={`navlinks ${menubar ? 'show' : 'hide'}`}>
          <li className="home">
            <a href="#home" className={activelink === "home" ? "active" : ""} onClick={() => { setActivelink("home"); window.scrollTo(0, 0); }}>Home</a>
          </li>
          <li className="Projects">
            <a href="#projects" className={activelink === "Projects" ? "active" : ""} onClick={() => setActivelink("Projects")}>Projects</a>
          </li>
          <li className="Contact">
            <a href="#contact" className={activelink === "Contact" ? "active" : ""} onClick={() => setActivelink("Contact")}>Contact</a>
          </li>
          <li className="Skills">
            <a href="#skills" className={activelink === "Skills" ? "active" : ""} onClick={() => setActivelink("Skills")}>Skills</a>
          </li>
          <li className="About">
            <a href="#about" className={activelink === "About" ? "active" : ""} onClick={() => setActivelink("About")}>About</a>
          </li>
        </ul>

        
        <button onClick={handlebar} className="btns3">
          {menubar ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
        </div>
      </nav>
      
    </div>
    
  );
};

export default Navbar;
