import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <>
        <nav class="navbar navbar-expand-sm studio-nav">
  <div class="container-fluid nav-container">
    <Link class="navbar-brand logo-pic" to="/">                  <img src="./Assests/opositive-logo.png" className="img-fluid"/>
</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <Link class="nav-link" to="/"><i class="fa fa-user" aria-hidden="true"></i>
Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/register"><i class="fa fa-sign-in" aria-hidden="true"></i>Sign Up</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Header;