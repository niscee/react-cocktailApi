import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <nav>
      <section className="nav-appname">
        <li>
          <Link to="/">CryptoApp</Link>
        </li>
      </section>
    </nav>
  );
};

export default Navbar;
