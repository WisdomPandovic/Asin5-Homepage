// src/components/NavComponent.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <nav className="navbar bg-light p-3 container">
    <div className='container-fluid'>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <img
            src="/logo.png" // Update with your logo path
            width="30"
            height="30"
            className="logo"
            alt="Asin5 logo"
          />
          <ul className="navbar-nav ml-3 d-flex">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-dark">Button</button>
      </div>
    </div>
  </nav>
  
  );
};

export default NavBar;
