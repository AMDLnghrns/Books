import React from "react";

function Jumbotron({ children }) {
  return (
    <div style={{ clear: "both", textAlign: "center", border: "solid 2px" }} >
      {children}
    </div>
  );
}

export default Jumbotron;

//<div style={{ clear: "both", textAlign: "center" }} className="jumbotron">