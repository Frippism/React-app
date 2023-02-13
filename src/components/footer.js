import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.css";

function footer() {
  return (
    <section className="footer">
    <hr className="foot" />
    <section className="aboutus">
        ABOUT US
    </section>
    <section className="info">
      <section className="left">
        <section className='name'>Made by Ayush Tiwari</section><br></br>
        <p >This project is made so that i can upload assets<br></br>
            that i created from scratch. And basic Unity3d<br></br>
            tutorial to watch and learn from.
            
        </p>
      </section>
      <section className="center">
      <Link to="https://github.com/Frippism" style={{ textDecoration: 'none', color:"white" }}>Github</Link><br></br>
        <Link to ="mailto:frippismtagz@gmail.com" style={{ textDecoration: 'none', color:"white" }}>E-mail</Link><br></br>
        <section>+91 9893012512</section>
      </section>
      <section className="right">
        <Link to="/assets" style={{ textDecoration: 'none', color:"white" }}>Assets</Link><br></br>
        <Link to="/tutorial" style={{ textDecoration: 'none', color:"white" }}>Tutorial</Link><br></br>
        <Link to="/contact" style={{ textDecoration: 'none', color:"white" }}>Contact</Link>
      </section>
    </section>
    <hr/>
  </section>
  )
}

export default footer
