
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Login from "views/Login";
import "assets/css/material-dashboard-react.css?v=1.10.0";

let token = localStorage.getItem('token');

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {
        token !== null ?
          <Login />
          :
          <Admin />
      }
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
