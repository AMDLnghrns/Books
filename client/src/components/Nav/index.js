import React from "react";
import "./style.css";

function Nav() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <h4>Google Books</h4>
        </li>
        <section id="Blank"></section>
        <li className="nav-item" id="link">
          <a className="nav-link active" href="./search">Search</a>
        </li>
        <li className="nav-item" id="link">
          <a className="nav-link" href="./saved">Saved</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;