import React from 'react'
import './navbar.css'
export default function Navbar(props) {
    return (
     <>


<nav class="navbar navbar-expand-lg navbar-light bg-#1d6b62d1">
  <a class="navbar-brand mx-5"  id='tagname' href="#">Social Hoist</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Details
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Services</a>
          <a class="dropdown-item" href="#">Strategies</a>
          <a class="dropdown-item" href="#">Benefits</a>
          <a class="dropdown-item" href="#">Plans</a>

        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>



     </>

    )
}
