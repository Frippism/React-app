import React from 'react'
import "./Assets.css";
import Mat1 from "../media/peacock-pre.jpg";
import Mat2 from "../media/alien-pre.jpg";
import Mat3  from "../media/space-pre1.jpg";
import Mat4 from "../media/space-pre2.jpg";
import Mat5 from "../media/future-pre.jpg";
import Mat6 from "../media/granite.jpg";
import { Card } from 'react-bootstrap';

function Assets() {
  return (
  <>
    <div className='material'>MATERIALS</div>
    <div>
      <div className='col'>
        <div className='leftcol'>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={Mat1} />
              <Card.Body>
                <Card.Title className='title'>Peacock  rock</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link className='title' href="https://drive.google.com/drive/folders/1p4xzPNWYdQjH_Dd7YhpW_2VRxp6Ldx8a?usp=sharing">Download</Card.Link>
              </Card.Body>
          </Card><br></br><br></br><br></br><br></br>
          <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src={Mat2} />
              <Card.Body>
                <Card.Title className='title'>Alien panel</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link className='title' href="https://drive.google.com/drive/folders/1F5XdsZWdDNe6meHYiIl7BwB9_-SbRfkW?usp=sharing">Download</Card.Link>
              </Card.Body>
          </Card>
        </div>
        <div className='centercol'>
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={Mat3} />
              <Card.Body>
                <Card.Title className='title'>Space Crusier 1</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link className='title' href="https://drive.google.com/drive/folders/14MeiOO9vKqetaD9ldn9BlimYOYz463t_?usp=sharing">Download</Card.Link>
              </Card.Body>
          </Card><br></br><br></br><br></br><br></br>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={Mat4} />
              <Card.Body>
                <Card.Title className='title'>Space Crusier 2</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link className='title' href="https://drive.google.com/drive/folders/1cqwRnIJ4-ZojSXjlaNKshVoQD-bgL4v4?usp=sharing">Download</Card.Link>
              </Card.Body>
          </Card>
        </div>
        <div className='rightcol'>
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={Mat5} />
              <Card.Body>
                <Card.Title >Futuristic panel</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link  href="https://drive.google.com/drive/folders/16vYZ8UuLeTv1B20L_qt72eMfpepbmIcr?usp=sharing">Download</Card.Link>
              </Card.Body>
          </Card><br></br><br></br><br></br><br></br>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={Mat6} />
              <Card.Body>
                <Card.Title >Gray granite</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link  href="https://drive.google.com/drive/folders/1XcPmSKR2TyJcdbRi89YVYi0Fx2ZvP_ar?usp=sharing">Download</Card.Link>
              </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  </>
  )
}

export default Assets
