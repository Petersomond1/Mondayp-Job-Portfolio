import React, { useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  useEffect(() => {
    const menu = document.querySelector('#menu');
    const links = document.querySelector('.links');

    if (menu && links) {
      const handleMenuClick = () => {
        links.classList.toggle('show');
      };

      menu.addEventListener('click', handleMenuClick);

      return () => {
        menu.removeEventListener('click', handleMenuClick);
      };
    }
  }, []);

  return (
    <nav>
      <a  className="logo">
         <img src="./assets/picturepax.jpg" alt="Profile" className="profile-image" />
        </a>
        <div className="logo-text">
        <h2>Engr Mondayp</h2>
        <h3>Job Portfolio</h3>
      </div>

      <ul className="links">
        <li><a href="#home"><span style={{ marginLeft: "0px", marginBottom: '10px' }}>Home</span></a></li>
        <li><a href="#about"><span style={{ marginLeft: "25px" }}>About Mondayp</span></a></li>
        <li><a href="#techs-Services"><span style={{ marginLeft: "45px" }}>Services Techs & Video presentations</span></a></li>
        <li><a href="#portfolio-cards"><span style={{ marginLeft: "65px" }}>Skills Deck</span></a></li>
        <li><a href="#contact"><span style={{ marginLeft: "85px" }}>Contact Me</span></a></li>
      </ul>

      <i className="bx bx-menu-alt-right" id="menu"></i>
      <a href="#contact" className="btn">Contact</a>
    </nav>
  );
};

export default Navigation;