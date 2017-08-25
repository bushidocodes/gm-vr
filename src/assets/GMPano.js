import "aframe";
import { Entity, Scene } from "aframe-react";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class GMPano extends Component {
  propTypes = {
    media: PropTypes.string.isRequired
  };

  state = {
    media: this.props.media,
    type: this.determineType(this.props.media),
    autoPlay: true,
    loop: true,
    muted: true
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.media !== nextProps.media) {
      this.setState({
        media: nextProps.media,
        type: this.determineType(nextProps.media)
      });
    }
  }

  /**
   * Helper function that compares the file extension against whitelists
   * of appropriate video and image extensions and returns either "video",
   * "image", or "unknown"
   * @param {*} path 
   */
  determineType(path) {
    const split = path.split(".");
    const fileExtension = split[split.length - 1];
    const videoExtensions = ["mp4"];
    const photoExtensions = ["jpg"];
    if (videoExtensions.indexOf(fileExtension) !== -1) {
      return "video";
    } else if (photoExtensions.indexOf(fileExtension) !== -1) {
      return "image";
    } else {
      return "unknown";
    }
  }

  render() {
    if (this.state.type === "image") {
      return (
        <Scene>
          <Entity primitive="a-sky" src={this.props.media} />
        </Scene>
      );
    } else if (this.state.type === "video") {
      return (
        <Scene>
          <Entity primitive="a-assets">
            <video
              autoPlay={this.state.autoPlay}
              id="active-video"
              loop={this.state.loop}
              muted={this.state.muted}
              src={this.props.media}
            />
          </Entity>
          <Entity primitive="a-videosphere" src="#active-video" />
        </Scene>
      );
    } else if (this.state.type === "unknown") {
      return (
        <div className="no-routes-found-error">
          <div className="content">
            <span data-uk-icon="icon: warning; ratio: 1.8" />
            <span>Unknown File Type </span>
          </div>
        </div>
      );
    }
  }
}
