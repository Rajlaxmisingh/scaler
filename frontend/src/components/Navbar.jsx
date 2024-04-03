import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div><nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand fs-4" href="#">Cabook</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item nav-link active" to="/" >
           HOME
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">ACTIVE RIDE</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link active" aria-disabled="true">ABOUT US</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar