import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  
  function logOut() {
    window.location.reload();
  }

  return (
    <div className="navbar">
      <div>
        <Link className="botonNavBar" to="/home">
          Home
        </Link>
      </div>
      <div>
        <Link className="botonNavBar" to="/about">
          About
        </Link>
      </div>
      <div>
        <button className="botonNavBar" onClick={logOut}>
          Salir
        </button>
      </div>
    </div>
  );
}
