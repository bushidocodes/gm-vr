import React, { Component } from "react";
import logo from "./logo.svg";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import GMPano from "./GMPano";
import DecipherLogo from "./DecipherLogo";
import Ayutthaya from "./assets/Ayutthaya.mp4";
import WazirKhan from "./assets/Wazir_khan.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <nav className="col-sm-2">
          <Link
            type="button"
            className="btn btn-primary btn-lg btn-block"
            to="/"
          >
            Logo
          </Link>
          <Link
            type="button"
            className="btn btn-primary btn-lg btn-block"
            to="/photo"
          >
            Photo
          </Link>
          <Link
            type="button"
            className="btn btn-primary btn-lg btn-block"
            to="/video"
          >
            Video
          </Link>
        </nav>
        <div className="col-sm-10">
          <Switch>
            <Route exact path="/" component={DecipherLogo} />
            <Route path="/photo" render={() => <GMPano media={WazirKhan} />} />
            <Route path="/video" render={() => <GMPano media={Ayutthaya} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
