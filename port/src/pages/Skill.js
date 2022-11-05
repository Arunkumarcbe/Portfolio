import React from 'react'
import "../style/skill.css";
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
function Skill() {
  return (
    <div className='container-fluid'>
      <div className='container-top'><h1><span  id="A">S</span>kills.</h1> 
      <Button variant="primary">HTML</Button>{' '}
      <Button variant="secondary">CSS</Button>{' '}
      <Button variant="success">Javascript</Button>{' '}
      <Button variant="warning">Bootstarp</Button>{' '}
      <Button variant="danger">React.js</Button>{' '}
      <Button variant="info">Photoshop</Button>{' '}
      </div>
        <div className='container-bottom'>
          <div className='skill'><h2>HTML</h2>
          <div className='slider1'>
          <ProgressBar variant="primary" now={70} /></div>
          </div>
          <div className='skill'><h2>CSS</h2>
          <div className='slider2'>
            <ProgressBar variant="secondary" now={60} /></div>
          </div><div className='skill'><h2>Javascript</h2>
          <div className='slider3'>
            <ProgressBar variant="success" now={20} /></div>
          </div><div className='skill'><h2>Bootstarp</h2>
          <div className='slider4'>
            <ProgressBar variant="warning" now={70} /></div>
          </div><div className='skill'><h2>React.js</h2>
          <div className='slider5'>
            <ProgressBar variant="danger" now={40} /></div>
          </div><div className='skill'><h2>Photoshop</h2>
          <div className='slider6'>
            <ProgressBar variant="info" now={80} /></div>
          </div>
        </div>
      </div>
  )
}

export default Skill