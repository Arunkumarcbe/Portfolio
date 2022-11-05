import React from 'react'
import Card from 'react-bootstrap/Card';
import "../style/project.css";
import ecom from "../assets/e-com.png";
import pizza from "../assets/pizza.png";
import mobile from "../assets/mobile.png";
import port from "../assets/port.png";

function projects() {
  return (
    <div className='project'>
      <div className='row'><h2 id="pro"><span  id="A">P</span>rojects</h2>
      <div className='col-md-6'><Card  style={{width:"500px"}} className="bg-dark text-white mx-auto mt-5">
      <Card.Img src={ecom} alt="Card image" />
      <Card.ImgOverlay >
        <Card.Title>E-commerce</Card.Title>
        <Card.Text>
          My e-commerce bootstrap project.
        </Card.Text>
      </Card.ImgOverlay>
    </Card></div>
      <div className='col-md-6'><Card style={{width:"500px"}} className="bg-dark text-white mx-auto mt-5"  >
      <Card.Img src={pizza} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>E-commerce</Card.Title>
        <Card.Text>
        My e-commerce React project pizza order site.
        </Card.Text>
      </Card.ImgOverlay>
    </Card></div>
    <div className='col-md-6'><Card  style={{width:"500px"}} className="bg-dark text-white mx-auto mt-5">
      <Card.Img src={mobile} alt="Card image" />
      <Card.ImgOverlay >
        <Card.Title>Mobile site</Card.Title>
        <Card.Text>
          My Mobile order site bootstrap project.
        </Card.Text>
      </Card.ImgOverlay>
    </Card></div>
    <div className='col-md-6'><Card  style={{width:"500px"}} className="bg-dark text-white mx-auto mt-5">
      <Card.Img src={port} alt="Card image" />
      <Card.ImgOverlay >
        <Card.Title>Portfolio</Card.Title>
        <Card.Text>
          My Portfolio react project.
        </Card.Text>
      </Card.ImgOverlay>
    </Card></div>
    </div>
      </div>
  )
}

export default projects