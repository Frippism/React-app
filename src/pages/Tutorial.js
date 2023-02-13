import React from 'react'
import "./Tutorial.css";  
import Loop from "../media/loop-animation.mp4";
import Door from "../media/door-animation.mp4";
import Raycast from "../media/raycast.mp4";
import { Card,Button } from 'react-bootstrap';

function Tutorial() {
  return (
<>
  <div className='tuto'>TUTORIALS</div>
  <div className='colu'>
    <div className='leftcolu'>
      <Card style={{ width: '40rem' }}>
      <video src={Loop} autoPlay loop muted />
      <Card.Body>
        <Card.Title>Loop Animation</Card.Title>
        <Button variant="primary">Coming soon...</Button>
        </Card.Body>
      </Card>
      </div>
    <div className='centercolu'>
      <Card style={{ width: '40rem' }}>
      <video src={Door} autoPlay loop muted />
      <Card.Body>
        <Card.Title>Trigger Door</Card.Title>
        <Button variant="primary">Coming soon...</Button>
        </Card.Body>
      </Card>
      </div>
    <div className='rightcolu'>
      <Card style={{ width: '40rem' }}>
      <video src={Raycast} autoPlay loop muted />
      <Card.Body>
        <Card.Title>Enemy Destroy</Card.Title>
        <Button variant="primary">Coming soon...</Button>
        </Card.Body>
      </Card>
      </div>
  </div>
</>
  )
}

export default Tutorial
