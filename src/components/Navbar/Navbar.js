import React from 'react'
// import Home from '../Home';
// import './navbar.css'
import '../index.css'
// import Message from '../Message/Message';
// import Services from '../Services/Services';

import {Link} from 'react-router-dom'
export default function Navbar(props) {
    return (
     <>

<div className='home-nav'>

 <nav className="navbar navbar-expand-lg navbar-light bg-#1d6b62d1  navpad">
  <a className="navbar-brand navbrand"  id='tagname' href="/"><img  className='image' src={require('../images/main_logo.png')} alt="" /> Social Hoist</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home 
        </Link>

      </li>
     
      <li className="nav-item dropdown nav-item margin">
        <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Details
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to="/Services">Services</Link>
          <Link className="dropdown-item" to="/Strategies">Strategies</Link>
          <Link className="dropdown-item" to="/Benefits">Benefits</Link>

        </div>
      </li>
      <li className="nav-item margin active">
      <Link className="nav-link" to="/Plans">Plans</Link>
      </li>
      <li className="nav-item margin active">
        <Link className="nav-link" to="/Message">Contact</Link>
      </li>
    
      </ul>
      </div>
      </nav>
</div>

{/* <Home/> */}

     </>

    )
}
