import React, { useRef , useEffect , useState} from 'react';
import './App.css';
import Typed from 'typed.js';

const Background = () => {

  const typedref = useRef(null)
  const [defaultText] = useState(`<span class="text-primary">I Am Into</span> <span class="text-secondary">Web Develop</span>`); 

  useEffect(() => {

    const options = {
      strings: [defaultText], 
      typeSpeed : 50,
      backSpeed : 50,
      startDelay: 500, 
      loop : true
      
      
    }

    const typed = new Typed(typedref.current , options)
  
    return () => {
      typed.destroy();
    }
  }, [defaultText])
  

  return (
    <div className='bg'>
      <div className='content' data-aos="fade-up-right" data-aos-duration="1000">
        <h1>Hi There,</h1>
        <h1>I'm Vinit <span className='span1'>Chawla</span></h1>
        <span ref={typedref} className='spans'></span>
        <p className='p1'>An enthusiastic web developer with a focus on frontend technologies, passionate about turning design visions into functional and visually appealing websites.</p>
        <a href="#contact"><button className='btns5'><i className="fas fa-handshake"></i> Hire me</button></a>
      </div>
     <div className='imgdiv'  data-aos="fade-up-left" data-aos-duration="1000">
     <img src={`${process.env.PUBLIC_URL}/images/87.avif`} alt="" className="avatar" />
     </div>
    </div>
  )
}

export default Background;
