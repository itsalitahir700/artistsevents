import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "./pages/events";

function App() {
  return (
    <div className="container my-4">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
