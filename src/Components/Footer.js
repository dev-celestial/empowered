import React from 'react';
import { Link } from 'react-router-dom';

import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer__title">
        <p>Digital Dwapar --<small>A new era of learning</small></p>
      </div>
      <div className="footer__social">
        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/celestial.dev/?hl=en"
          className="footer__social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram"></i>
        </a>

        {/* Twitter Link */}
        <a
          href="https://twitter.com/your_twitter_handle" // Replace with your actual Twitter URL
          className="footer__social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-twitter"></i>
        </a>

        {/* GitHub Link */}
        <a
          href="https://github.com/dev-celestial"
          className="footer__social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i> 
        </a>
      </div>

      <ul className="footer__categories">
        <li><Link to="/">Class 6</Link></li>
        <li><Link to="/">Class 7</Link></li>
        <li><Link to="/">Class 8</Link></li>
        <li><Link to="/">Class 9</Link></li>
        <li><Link to="/">Class 10</Link></li>
        <li><Link to="/">Class 11</Link></li>
        <li><Link to="/">Class 12</Link></li>
      </ul>

      <div className="footer__copyright">
        <small>All Rights Reserved &copy; Copyright, Celestial</small>
      </div>
    </footer>
  );
};

export default Footer;
