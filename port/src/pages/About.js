import React from 'react'
import "../style/about.css"
import Banner from "../assets/banner.png"
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='about'style={{backgroundImage:`url(${Banner})`}}>
    <div className="h-container">
    <h1><span  id="A">A</span>runkumar.</h1>
    <div className="wrapper">
    <div className="static-txt">I'm</div>
    <ul className="dynamic-txts">
      <li><span>fresher.</span></li>
      <li><span>Developer.</span></li>
      <li><span>Designer.</span></li>
      <li><span>Editor.</span></li>
    </ul>
  </div>
    <Link to={'/projects'}> <button >Projects</button></Link>
  </div>
  </div>
  )
}

export default About