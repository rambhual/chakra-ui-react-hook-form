import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";

import Home from "./page/Home.page";
import Authentication from "./page/Authentication";
const App = () => {
  return (
    <Fragment>
      <Nav />
      <div className="container" style={{ marginTop: "4em" }}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/auth">
            <Authentication />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;
