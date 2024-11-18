import React from 'react';
import './App.css';

const Skills = () => {
  return (
    <div className='skills' id='skills'>
       <h1>Skills</h1>
       <div className='container'>
       <div className='items' data-aos="flip-left" data-aos-duration="1000">
       <img src={`${process.env.PUBLIC_URL}/images/2.webp`} alt="HTML" className="img4" />
        <h2>HTML</h2>
       </div>

       <div className='items' data-aos="flip-left" data-aos-duration="1000">
       <img src={`${process.env.PUBLIC_URL}/images/3.png`} alt="CSS" className='img4'/>
       <h2>CSS</h2>
       </div>
       </div>

       <div className='container'>
       <div className='items' data-aos="flip-left" data-aos-duration="1000">
       <img src={`${process.env.PUBLIC_URL}/images/4.webp`} alt="JAVASCRIPT" className='img4'/>
       <h2>JAVASCRIPT</h2>
       </div>

       <div className='items' data-aos="flip-left" data-aos-duration="1000">
       <img src={`${process.env.PUBLIC_URL}/images/1.webp`} alt="REACT JS" className='img4'/>
       <h2>REACT JS</h2>
       </div>
       </div>

       <div className='container'>
       <div className='items' data-aos="flip-left" data-aos-duration="1000">
       <img src={`${process.env.PUBLIC_URL}/images/5.png`} alt="BOOSTRAP" className='img4'/>
       <h2>BOOSTRAP</h2>
       </div>

       <div className='items' data-aos="flip-left" data-aos-duration="1000">
       <img src={`${process.env.PUBLIC_URL}/images/6.png`} alt="JQUERY" className='img4'/>
       <h2>JQUERY</h2>
       </div>
       </div>

       <div className='container'>
       <div className='items' data-aos="flip-left" data-aos-duration="1000">
       <img src={`${process.env.PUBLIC_URL}/images/7.png`} alt="PHP" className='img4'/>
       <h2>PHP</h2>
       </div>

       <div className='items' data-aos="flip-left" data-aos-duration="1000">
       <img src={`${process.env.PUBLIC_URL}/images/8.png`} alt="PYTHON" className='img4'/>
       <h2>PYTHON</h2>
       </div>
       </div>

       <div className='container'>
       <div className='items' data-aos="flip-left" data-aos-duration="1000">
       <img src={`${process.env.PUBLIC_URL}/images/10.png`} alt="C" className='img4'/>
       <h2>C</h2>
       </div>

       <div className='items' data-aos="flip-left" data-aos-duration="1000">
       <img src={`${process.env.PUBLIC_URL}/images/11.png`} alt="C++" className='img4'/>
       <h2>C++</h2>
       </div>
       </div>

       <div className='container'>
       <div className='items' data-aos="flip-left" data-aos-duration="1000">
       <img src={`${process.env.PUBLIC_URL}/images/12.png`} alt="JAVA" className='img4'/>
       <h2>JAVA</h2>
       </div>

       <div className='items' data-aos="flip-left" data-aos-duration="1000">
       <img src={`${process.env.PUBLIC_URL}/images/9.webp`} alt="MYSQL" className='img4'/>
       <h2>MY SQL</h2>
       </div>
       </div>
    </div>
  )
}

export default Skills;
