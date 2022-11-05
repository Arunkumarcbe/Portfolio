import React from 'react'
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import "../style/footer.css"
function footer() {
  return (
    <footer className="footer navbar-fixed-bottom">
    <div><MDBFooter className='text-center text-white' style={{ backgroundColor: '#212529' }} id="footer">
    <div className='text-center p-3' style={{ backgroundColor: '#212529' }}>
      © 2022 Copyright: 
      <a className='text-white' href='#' id="cp"><span  id="A">A</span>runkumar.s 
      </a>
    </div>
  </MDBFooter></div>
  </footer>
  )
}

export default footer