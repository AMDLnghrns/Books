import React from "react";
import "./style.css";

function Title() {
  return (
  <div
    style={{ 
      clear: "both", 
      textAlign: "center" 
    }}
    // className="jumbotron"
  >
  
      <a className="navbar-brand" href="/">
        <h1>(React) Google Books Search</h1>
        <h3>Search for and Save Books of Interest</h3>
      </a>
    </div>
  );
}

export default Title;
