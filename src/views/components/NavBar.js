import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-div">
        <h1>React Slideshow</h1>
        <div>
          <ul>
            <Link to="/">
              <li>Docs</li>
            </Link>
            <Link to="/api">
              <li>API</li>
            </Link>
            <a
              target="_blank"
              href="https://github.com/femioladeji/react-slideshow"
            >
              <li>Github</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;