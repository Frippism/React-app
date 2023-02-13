import React from 'react';  
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import Mat1 from "../media/alien1.jpg"
import Mat2 from "../media/future1.jpg";
import Mat3  from "../media/space1.jpg";
import Mat4 from "../media/space2.jpg";
import Loop from "../media/loop-animation.mp4";
import Door from "../media/door-animation.mp4";
import Raycast from "../media/raycast.mp4";
import Videobg from "../media/unity-video.mp4";
import { Link } from 'react-router-dom';




function Home() {

  return (
    
    <>
    <div>
        <div className='content'>
          <h1>Free Assets</h1>
          <h2>And Tutorials</h2>
        </div>
        <video className="vid" src={Videobg} autoPlay loop muted></video>
        
    </div>
    <div className='bg'>
      <div className='assetHeading'>VIDEOS</div>
      </div>

<div class="grid">
  <article>
    <video className='loopvid' src={Loop} autoPlay loop muted></video>
    <div class="text">
      <h1>Loop Animation</h1>
      <p>A simple cube loop animation which is looping throughout the game , no need of coding. </p>
    </div>
  </article>
  <article>
    <video src={Door} autoPlay loop muted></video>
    <div class="text">
      <h1>Trigger Door</h1>
      <p>Door is going to open when player reaches a certain trigger area. Opening and closing door annimation and collide function.</p>
    </div>
  </article>
  <article>
    <video src={Raycast} autoPlay loop muted></video>
    <div class="text">
      <h1>Object Destroy</h1>
      <p>Destroying enemy when the left mouse button is clicked by the player. Using the concept of raycast this is possible.</p>
    </div>
  </article>
  
</div>
      
<div className='learnmore'>
      <button className='boo'><Link to="/tutorial" style={{ textDecoration: 'none', color:"white" }}>Learn More  →</Link></button>
</div>
    
    <div className='bg'>
      <div className='assetHeading'>ASSETS</div>
      </div>



      <div className='caro'>
<Carousel>
  <Carousel.Item interval={2000}>
    <img className="d-block w-100" src={Mat1} alt="material"/>
    <Carousel.Caption>
      <h3>Alien panel</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img className="d-block w-100" src={Mat2} alt="material" />
    <Carousel.Caption>
      <h3>Futuristic panel</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img className="d-block w-100" src={Mat3} alt="material" />
    <Carousel.Caption>
      <h3>Space cruiser</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={Mat4} alt="material"/>
    <Carousel.Caption>
      <h3>Space Cruiser 2</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

<div className='learnmore'>
      <button className='boo' ><Link to="/assets" style={{ textDecoration: 'none', color:"white" }}>Learn More  →</Link></button>
</div>

    </>

  )
}

export default Home
