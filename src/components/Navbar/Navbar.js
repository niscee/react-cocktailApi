import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const linkStyle = {
  textDecoration: 'none', 
  color: 'gold'
}

const Navbar = () => {
  return (
    <nav>
      <section className="nav-appname">
        <p>Cocktail City</p>
      </section>
      <section className="nav-menu">
        <ul>
          <li>
            <Link to="/" style={linkStyle}>Home </Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle}>About</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
