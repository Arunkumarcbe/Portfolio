import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/navbar';
import "../style/navbar.css"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import About from '../pages/About';
import Skill from '../pages/Skill';
import Experience from '../pages/Experience';
import Projects from '../pages/projects';
import Form from  "../components/form";
function navbar() {
  return (
    <Router>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
    <Container>
      <Navbar.Brand id="brand"><span id="A">A</span>run.</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to={"/"}>About</Nav.Link>
          <Nav.Link as={Link} to={"skill"}>Skill</Nav.Link>      
          <Nav.Link as={Link} to={"experience"}>Experience</Nav.Link>
          <Nav.Link as={Link} to={"projects"}>Projects</Nav.Link>
        </Nav>
        <Link to="/form"><button type="button" className="btn sign-in btn-sm btn-outline py-1 ms-auto">HIRE ME</button></Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <div>
    <Routes>
      <Route path='/' element={<About/>} />
      <Route path='Skill' element={<Skill/>} />
      <Route path='Experience' element={<Experience/>} />
      <Route path='projects' element={<Projects/>} />
      <Route path="form" element={<Form/>} />
    </Routes>
  </div>
  </Router>
  )
}

export default navbar