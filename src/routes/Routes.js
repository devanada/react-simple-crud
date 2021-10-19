import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "../components/Header";
import Home from "../pages/Home";
import Update from "../pages/Update";
import Create from "../pages/Create";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";
import "../style/app.css";

function Routes() {
  useEffect(() => {
    // console.log("test");
  }, []);

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div style={{ display: "flex", height: "100%" }}>
            <Switch>
              <Route exact path="/">
                {(props) => (
                  <div className="parent">
                    <Header />
                    <Home {...props} />
                  </div>
                )}
              </Route>
              <Route path="/update/:id">
                {(props) => (
                  <div className="parent">
                    <Header />
                    <Update {...props} />
                  </div>
                )}
              </Route>
              <Route path="/create">
                {(props) => (
                  <div className="parent">
                    <Header />
                    <Create {...props} />
                  </div>
                )}
              </Route>
              <Route path="/detail/:id">
                {(props) => (
                  <div className="parent">
                    <Header />
                    <Detail {...props} />
                  </div>
                )}
              </Route>
              <Route>
                {(props) => (
                  <div className="parent">
                    <Header />
                    <NotFound {...props} />
                  </div>
                )}
              </Route>
            </Switch>
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default Routes;
