import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faQuestion,
  faList,
  faPlus,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // CSS file for styling

function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} className="menu-icon1" />
        
      </Link>
      <Link to="/ask">
        <FontAwesomeIcon icon={faQuestion} className="menu-icon1" />
        
      </Link>
      <Link to="/post">
      <FontAwesomeIcon icon={faPlus} className="fontawesome-icon" />
        
      </Link>
      <Link to="/session">
        <FontAwesomeIcon icon={faList} className="menu-icon1" />
        
      </Link>
      <Link to="/profile">
        <FontAwesomeIcon icon={faUser} className="menu-icon1" />
        
      </Link>
    </div>
  );
}

export default Footer;
