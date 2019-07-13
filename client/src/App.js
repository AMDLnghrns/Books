import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/Nav";
import Title from "./components/Title";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Title />
        <Switch>
          <Route exact path = "/" component = {Search} />
          <Route exact path = "/search" component = {Search} />
          <Route exact path = "/books/:id" component = {Detail} />
          <Route exact path = "/saved" component = {Saved} />
          <Route component = {NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


