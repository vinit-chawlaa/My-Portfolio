import React from 'react';


const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <h1>Projects</h1>
            <div className="card">
                <div className="cards-set" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
                    <div className="card-items">
                        <div className="imagesdiv">
                            <img src={`${process.env.PUBLIC_URL}/images/12.jpg`} alt="" />
                        </div>
                        <h3>Weather App</h3>
                        <p>This Weather App is built using React JS, OpenWeather API, and responsive design to provide real-time weather data.</p>
                        <div className="btnsdiv">
                        <a href="https://vinit-chawlaa.github.io/Weathersapp2/" target="_blank" rel="noopener noreferrer" ><button className='btns7'>Demo</button></a>
                        <a href="https://github.com/vinit-chawlaa/Weathersapp2.git" target="_blank" rel="noopener noreferrer" > <button className='btns8'>Code</button></a>
                        </div>
                    </div>
                </div>

                <div className="cards-set" data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
                    <div className="card-items">
                        <div className="imagesdiv">
                            <img src={`${process.env.PUBLIC_URL}/images/18.jpg`} alt="" />
                        </div>
                        <h3>Todo List App</h3>
                        <p>This To-Do List App is built using React JS with a responsive design, allowing users to add, edit, and delete tasks for efficient task management.</p>
                        <div className="btnsdiv">
                        <a href="https://vinit-chawlaa.github.io/Todoapp/" target="_blank" rel="noopener noreferrer" ><button className='btns7'>Demo</button></a>
                            <a href="https://github.com/vinit-chawlaa/Todoapp.git" target="_blank" rel="noopener noreferrer"> <button className='btns8'>Code</button></a>
                        </div>
                        </div>
                    </div>
              

                <div className="cards-set" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
                    <div className="card-items">
                        <div className="imagesdiv">
                            <img src={`${process.env.PUBLIC_URL}/images/14.png`} alt="" />
                        </div>
                        <h3>E-Commerce Product page</h3>
                        <p>This responsive e-commerce product page features an interactive image gallery, detailed product descriptions, and sleek UI components, all built with React JS.</p>
                        <div className="btnsdiv">
                            <a href="https://vinit-chawlaa.github.io/Ecommerce/" target="_blank" rel="noopener noreferrer"><button className='btns7'>Demo</button></a>
                            <a href="https://github.com/vinit-chawlaa/Ecommerce.git" target="_blank" rel="noopener noreferrer"> <button className='btns8'>Code</button></a>
                        </div>
                    </div>
                </div>

                <div className="cards-set" data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
                    <div className="card-items">
                        <div className="imagesdiv">
                            <img src={`${process.env.PUBLIC_URL}/images/19.jpg`} alt="" />
                        </div>
                        <h3>Portfolio Website</h3>
                        <p>This portfolio website showcases my projects and skills, featuring a clean, responsive design and built with React JS for an engaging user experience.</p>
                        <div className="btnsdiv">
                        <a href=" https://vinit-chawlaa.github.io/My-Portfolio/" target="_blank" rel="noopener noreferrer"><button className='btns7'>Demo</button></a>
                            <a href="https://github.com/vinit-chawlaa/My-Portfolio.git" target="_blank" rel="noopener noreferrer"> <button className='btns8'>Code</button></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
     
    )
}

export default Projects;
