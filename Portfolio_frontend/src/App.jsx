import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const menu = document.querySelector('#menu');
    const links = document.querySelector('.links');

    menu.addEventListener('click', () => {
      links.classList.toggle('show');
    });

    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showVideo && (
        <div className="intro-video">
          <video autoPlay muted>
            <source src="path_to_your_intro_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <nav>
        <a href="#" className="logo">
          <h1>Mondayp</h1>
          <h3>Job Portfolio</h3>
        </a>

        <ul className="links">
          <li><a href="#home"><span style={{ marginLeft: "0px", marginBottom: '10px' }}>Home</span></a></li>
          <li><a href="#about"><span style={{ marginLeft: "25px" }}>About Mondayp</span></a></li>
          <li><a href="#techs"><span style={{ marginLeft: "45px" }}>Services Techs & Video presentations</span></a></li>
          <li><a href="#contact"><span style={{ marginLeft: "85px" }}>Contact Me</span></a></li>
        </ul>

        <i className="bx bx-menu-alt-right" id="menu"></i>
        <a href="#contact" className="btn">Contact</a>
      </nav>
<br />
<div className='content-body'>

      <section className="home" id="home">
    
        <div className="welcome">
          <h3>Welcome!!</h3>
        </div>
        <hr className="hr" />
        <img src="src/assets/picture pax.jpg" alt="" />

        {/* <div> */}
          <h2><span className='name'>I'm</span> <span>Monday-p</span> </h2>
        {/* </div> */}
        <hr className="hr" />
        <div className='intro'>
          <h3><span><big style={{ fontSize: '25px', fontWeight: 'bolder' }}>"Monday the Programmer" </big> is what friends like you call me</span></h3>
          <h3><span><big style={{ fontSize: '25px', fontWeight: 'bolder' }}>Mondayp </big>is a Web Developer & a Mechanical Engineer</span></h3>
          <h3><span><big style={{ fontSize: '25px', fontWeight: 'bolder' }}>Mondayp</big> is based in Atlanta, GA, USA.</span></h3>
          <h3><span><big style={{ fontSize: '25px', fontWeight: 'bolder' }}>Mondayp</big> is job ready !   </span></h3>
          <h3><span><big style={{ fontSize: '25px', fontWeight: 'bolder' }}>Mondayp</big> is looking for a Software Engineering Position and is very enthusiastic to joining any team that's open to future direction in in-depth emerging software techs and core-specialization.</span> </h3>
        </div>

        <div className='intro2'>
          <h3><span>And as you can see, this is just a job portfolio to showcase my prowess/proficency in this new carreir path with a glimpse of my coding skills and services using emerging Techs, and to create a point of contact for recruiters/employers or clients like you to reach me.</span></h3>
        </div>
        {/* <div className="btn-box"> */}
          <div className="bttn">Hire me</div>
          <br />
          <hr className="hr" />
          <br />
          <div className="bttn">Contact</div>
        {/* </div> */}
      </section>


      <section>
        <div className="about-box" id="about">

          <div className="about-info">
            <h2><span>About Mondayp</span></h2>
         </div>
        
            <div className="skills-heading">
            <h3>  Frontend Development Skills</h3>
            </div>

          <div className='skills'>
          <li><span><i className='bx bx-chevron-right'></i> HTML</span></li>
              <li><span><i className='bx bx-chevron-right'></i> JavaScript</span></li>
              <li><span><i className='bx bx-chevron-right'></i> React</span></li>
              <li><span><i className='bx bx-chevron-right'></i> CSS</span></li> 
              <li><span><i className='bx bx-chevron-right'></i> Bootstrap</span></li>
              <li><span><i className='bx bx-chevron-right'></i> Tailwind</span></li>
              <li><span><i className='bx bx-chevron-right'></i> Material-UI</span></li>
          </div>

          <div className="skills-heading">
            <h3>  Backend Development Skills</h3>
            </div>

          <div className='skills'>
              <span><i className='bx bx-chevron-right'></i> Node.js </span>
              <span><i className='bx bx-chevron-right'></i> Express</span>
              <span><i className='bx bx-chevron-right'></i> MySQL</span>
              <span><i className='bx bx-chevron-right'></i> APIs</span> 
              <span><i className='bx bx-chevron-right'></i> MongoDB</span>
              <span><i className='bx bx-chevron-right'></i> AWS</span>
              <span><i className='bx bx-chevron-right'></i> Firebase</span>
          
          </div>

           <div className="skills-heading">
            <h3>  FullStack Development Skills</h3>
            </div>

          <div className='skills'>

              <ul>
              <li><span><i className='bx bx-chevron-right'></i> GitHub</span></li> 
              <li><span><i className='bx bx-chevron-right'></i> Git</span></li> 
              <li><span><i className='bx bx-chevron-right'></i> Heroku</span></li>
             
              <li><span><i className='bx bx-chevron-right'></i> Netlify</span></li> 
              </ul>
              <ul> 
              <li><span><i className='bx bx-chevron-right'></i> Adobe XD</span></li> 
              <li><span><i className='bx bx-chevron-right'></i> Trello</span></li> 
              <li><span><i className='bx bx-chevron-right'></i> Slack</span></li> 
              <li><span><i className='bx bx-chevron-right'></i> Figma</span></li> 
              </ul>
          
          </div> 
          <img src="src/assets/picture pax.jpg" alt="" className='about-image' />
         <div className="skill">   
        <div className='skills-showcase'>
          <h3><span> Links to Videos to Showcase Skills</span></h3>
          </div>
          <div className='skills'>
          <ul>
            <li><span><i className='bx bx-chevron-right'></i>React.js</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
            <li><span><i className='bx bx-chevron-right'></i>JavaScript</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
            <li><span><i className='bx bx-chevron-right'></i>HTML/CSS</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
          </ul>
          <ul>
            <li><span><i className='bx bx-chevron-right'></i>Tailwind</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
            <li><span><i className='bx bx-chevron-right'></i>BootStrap</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
            <li><span><i className='bx bx-chevron-right'></i> Material-UI</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
          </ul>
          <ul>
            <li><span><i className='bx bx-chevron-right'></i>  Node.js</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
            <li><span><i className='bx bx-chevron-right'></i> Express</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
            <li><span><i className='bx bx-chevron-right'></i> MySQL</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
          </ul>
          <ul>
            <li><span><i className='bx bx-chevron-right'></i>  RESTful APIs</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
        
            <li><span><i className='bx bx-chevron-right'></i> MongoDB</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
            <li><span><i className='bx bx-chevron-right'></i> Firebase</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
          </ul>
          <ul>
            <li><span><i className='bx bx-chevron-right'></i>  GitHub</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
        
            <li><span><i className='bx bx-chevron-right'></i>Git</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
            <li><span><i className='bx bx-chevron-right'></i> Figma</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
          </ul>
          <ul>
            <li><span><i className='bx bx-chevron-right'></i>  Hereku</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
        
            <li><span><i className='bx bx-chevron-right'></i> Netlify</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
            <li><span><i className='bx bx-chevron-right'></i> Adobe XD</span></li>
            <p>abc</p><p>abc</p><p>abc</p>
          </ul>
        </div>

        </div>
        </div>
         

      </section>

      <section className="techs" id="techs">
        <div className="techs-info">
          <h2><span>Services Techs</span></h2>
        </div>
        <div className="techs-box">
          <div className="techs-card">
            <h3>Frontend Development</h3>
            <p>abc</p>
          </div>
          <div className="techs-card">
            <h3>Backend Development</h3>
            <p>abc</p>
          </div>
          <div className="techs-card">
            <h3>FullStack Development</h3>
            <p>abc</p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default App;
