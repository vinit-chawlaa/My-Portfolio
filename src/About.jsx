import React from 'react'
import './App.css';

const About = () => {
  return (
    <div className='about' id='about' data-aos="flip-right"  data-aos-duration="1000"> 
    <div className="maindiv">
      <div className="leftdiv">
      <div className='imgdiv1' data-aos="flip-right" data-aos-duration="1000">
      <img src={`${process.env.PUBLIC_URL}/images/87.avif`} alt="" className="avatar" style={{width: '450px'}} />
     </div>
      </div>
      <div className="rightdiv">
      <h1 data-aos="fade-left" data-aos-duration="1000">About <span style={{color : '#0ef'}}>Me</span></h1>
      <br />
      <p data-aos="fade-left" data-aos-duration="1200">I am a web developer with a strong foundation in various web technologies and a keen interest in specializing in frontend development, particularly using React.js. Through my learning journey, I have developed skills in HTML, CSS, JavaScript, and React, which I am eager to apply in building dynamic and user-friendly web applications. My goal is to create engaging, responsive user interfaces that enhance the overall user experience. I am excited to take on new challenges and contribute to projects that leverage my skills in React to deliver high-quality web solutions.</p>
      <button className='readmore' data-aos="zoom-in" data-aos-duration="1000"><a href="#contact" style={{textDecoration : 'none' , color : 'inherit'}}>Get Started</a></button>
      </div>
    </div>
    </div>
  )
}

export default About;