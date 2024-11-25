import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const Contact = () => {

  const [formdata,setFormdata] = useState({
    name : '',
    email : '',
    subject : '',
    message : '',
  })
  const [isSubmitting,setIsSubmitting] = useState(false)
  const [submitsucess,setSubmitsucess] = useState(false)

  const handlechange = (e) =>{
  const {name , value} = e.target;
  setFormdata({...formdata , [name] : value})
  }

  const handlesubmit = (e) =>{
    e.preventDefault();
    console.log("form data submitted : ",formdata)
    setIsSubmitting(true)

    setTimeout(() => {
    setSubmitsucess(true)
    setIsSubmitting(false)
    setFormdata({ name : '', email : '', subject : '', message : '',})
   }, 1000);
  }
  return (
    <div>
        <div className='contact' id='contact'>         
            <h1>Contact</h1>
            <div className="main" data-aos="zoom-in" data-aos-duration="1000">
                <div className="content1">
                <h3>Let's Work Together</h3>
                <p>Hi there! I'm a passionate web developer with a strong focus on frontend development, specializing in creating visually appealing, responsive, and user-friendly websites that bring your brand's vision to life. With expertise in HTML, CSS, JavaScript, and React.js, I aim to deliver seamless, dynamic, and engaging user experiences that inspire and captivate.</p>
                <br />

                <div className="icons">
                <a href="https://wa.me/9116494204" style={{color : 'inherit'}}><i class="fa-brands fa-whatsapp"></i></a>
                <a href="https://github.com/vinit-chawlaa" style={{color : 'inherit'}}><i class="fa-brands fa-github"></i></a>
                <a href="mailto:chawlaavinit@gmail.com" style={{color : 'inherit' , textDecoration : 'none'}}><i className="fa-solid fa-envelope"></i></a>
                <a href="tel:+9116494204" style={{color : 'inherit' , textDecoration : 'none'}}><i className="fa-solid fa-phone"></i></a>
                </div>
                </div>

                <form onSubmit={handlesubmit}>
                 <input type="text" placeholder='Enter Your Name' value={formdata.name} name='name' onChange={handlechange} required/>
                 <input type="email" placeholder='Enter Your Email' value={formdata.email} name='email' onChange={handlechange} required/>
                 <input type="text" placeholder='Enter Your Subject' value={formdata.subject} name='subject' onChange={handlechange} required/>
                 <textarea placeholder='Enter Your Message' rows="10" value={formdata.message} name='message' onChange={handlechange} required></textarea>
                 <button className='submit' type='submit' disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}  
                 </button>
                 {submitsucess && <p style={{color : 'white'}}>Thank you! Your message has been sent.</p>}
                
                </form>
            </div>
        </div>
    </div>
  )
} 

export default Contact;