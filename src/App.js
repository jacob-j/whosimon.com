import React from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";

import Start from "./pages/Start";
import Cases from "./pages/Cases";
import Template from "./cases/";
import About from "./pages/About";

export const ScrollToTop = withRouter(props => {
  props.history.listen((location, action) => {
    window.scrollTo(0, 0);
  });
  return props.children;
});

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
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
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
