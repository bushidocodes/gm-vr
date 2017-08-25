import "aframe";
import { Entity, Scene } from "aframe-react";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Godzilla from "./assets/godzilla.dae";

export default class DecipherLogo extends Component {
  render() {
    return (
      <Scene>
        <Entity primitive="a-assets">
          <Entity primitive="a-assets-model" id="godzilla" src={Godzilla} />
        </Entity>
        <Entity primitive="a-sky" material={{ color: "black" }} />
        <Entity
          primitive="a-sphere"
          material={{ color: "white" }}
          position={{ x: -3, y: 3, z: -5 }}
        />
        <Entity
          primitive="a-sphere"
          material={{ color: "white" }}
          position={{ x: 0, y: 0, z: -5 }}
        />
        <Entity
          primitive="a-sphere"
          material={{ color: "green" }}
          position={{ x: 0, y: 3, z: -5 }}
        />
        <Entity
          primitive="a-text"
          value="Fracking Friday (don't turn around)"
          position={{ x: -3, y: 5, z: -5 }}
        />
        <Entity
          primitive="a-collada-model"
          src={Godzilla}
          position={{ x: -3, y: -50, z: 200 }}
          rotation={{ X: 0, y: 150, z: 0 }}
        />
        <Entity
          primitive="a-text"
          value="360 Panoramas with WebVR Support for headsets"
          position={{ x: -4, y: 4.5, z: -5 }}
        />
      </Scene>
    );
  }
}
