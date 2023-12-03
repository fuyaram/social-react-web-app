import React from "react";
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa"; 
import './Navbar.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faFire, faUsers } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  return (
    <>
    
    
    <header className="navbar45">
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
        <div className="icons">
          <Link to="/Notification" className="icon notification-icon">
            <FaBell />
          </Link>
          <Link to="/sms" className="icon message-icon">
            <FaEnvelope />
          </Link>
        </div>
      </header>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-menu">
            <Link to="/trending" className="navbar-item">
              <FontAwesomeIcon icon={faFire} className="menu-icon" />
              Trending
            </Link>
            <Link to="/propeers" className="navbar-item">
              <FontAwesomeIcon icon={faUsers} className="menu-icon" />
              Propeers
            </Link>
            <Link to="/all" className="navbar-item">
              <FontAwesomeIcon icon={faGlobe} className="menu-icon" />
              All
            </Link>
          </div>
        </div>
      </nav>
    </>


  );
};

export default Navbar;
