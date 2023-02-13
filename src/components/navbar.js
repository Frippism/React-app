import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

import UnityLogo from "../media/unity-logo.png";

function navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
          <img src={UnityLogo} />
        </div>
        <div className='rightSide'>
          <Link to="/">HOME</Link>
          <Link to="/assets">ASSETS</Link>
          <Link to="/tutorial">TUTORIAL</Link>
          <Link to="/contact">CONTACT</Link>
        </div>  
    </div>
  )
}

export default navbar
