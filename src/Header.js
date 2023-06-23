import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Blogs</Link>
          </li>
          <li>
            <Link to="/register">Contact</Link>
          </li>
        </ul>
      </nav>
        </>
    )
}

export default Header;