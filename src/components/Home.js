import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
export default function Home(props) {
    return (
      <>

<div className='home'>
 <div className='home-nav'>

 <nav class="navbar navbar-expand-lg navbar-light bg-#1d6b62d1">
  <a class="navbar-brand navbrand"  id='tagname' href="#"><img  className='image' src="/public/downloads/p1.jpg" alt="" /> Social Hoist</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ">
      <li class="nav-item active">
        <Link class="nav-link" to="./Home.js">Home <span class="sr-only">(current)</span></Link>
      </li>
     
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Details
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link class="dropdown-item" to="./components/Services.js">Services</Link>
          <Link class="dropdown-item" to="./components/Strategies.js">Strategies</Link>
          <Link class="dropdown-item" to="./components/Benefits.js">Benefits</Link>
          <Link class="dropdown-item" to="./components/Card.js">Plans</Link>

        </div>
      </li>
      <li class="nav-item margin">
        <Link class="nav-link" to="">Contact</Link>
      </li>
      </ul>
      </div>
      </nav>
</div>

<div className='home-content'>  
<p className='subtext'>Lift your social-media presence </p>
<p className='subtext-1'> with </p>

<h1 className='main-heading'> Social-Hoist</h1>
</div>
</div>

</>
    )
}
