import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Start from "./pages/Start";
import Cases from "./pages/Cases";
import Template from "./cases/";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Cases />
          </Route>
          <Route path="/case/:url" component={Template} />
          <Route path="/">
            <Start />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
