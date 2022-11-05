import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../style/form.css";

function form() {
  return (
      <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Contacts</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
      <a href='https://github.com/Arunkumarcbe' target="_blank"> <Button variant="outline-dark">GitHub</Button> </a>
      <a href='https://www.linkedin.com/in/arunkumarcbe/' target="_blank"> <Button variant="outline-primary">LinkedIn</Button> </a>
      </Modal.Footer>
    </Modal.Dialog>
  )
}

export default form