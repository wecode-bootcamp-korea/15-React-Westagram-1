import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginHaiin from "./pages/haiinkim/Login/Login";
import MainHaiin from "./pages/haiinkim/Main/Main";

import LoginJunhui from "./pages/junhuihan/Login/Login";
import MainJunhui from "./pages/junhuihan/Main/Main";

import LoginHayoung from "./pages/hayounglee/Login/Login";
import MainHayoung from "./pages/hayounglee/Main/Main";

import LoginMina from "./pages/minahan/Login/Login";
import MainMina from "./pages/minahan/Main/Main";

import LoginKyubin from "./pages/kyubinkim/Login/Login";
import MainKyubin from "./pages/kyubinkim/Main/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/login-kyubin" component={LoginKyubin} />
        <Route exact path="/main-kyubin" component={MainKyubin} />

        <Route exact path="/login-junhui" component={LoginJunhui} />
        <Route exact path="/main-junhui" component={MainJunhui} />

        <Route exact path="/login-haiin" component={LoginHaiin} />
        <Route exact path="/main-haiin" component={MainHaiin} />

        <Route exact path="/login-hayoung" component={LoginHayoung} />
        <Route exact path="/main-hayoung" component={MainHayoung} />

        <Route exact path="/login-mina" component={LoginMina} />
        <Route exact path="/main-mina" component={MainMina} />
      </Router>
    );
  }
}

export default Routes;
