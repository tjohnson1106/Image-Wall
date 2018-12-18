import React, { Component } from "react";

class Image extends Component {
  render() {
    const post = this.props.post;
    return <figure className="figure" />;
  }
}

export default Image;
