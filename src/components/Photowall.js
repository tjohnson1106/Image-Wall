import React, { Component } from "react";

import Image from "./Image";

// receive posts into component

class Photowall extends Component {
  state = {};
  render() {
    return (
      <div className="image-grid">
        {this.props.posts.map((post, index) => (
          <Image key={index} post={post} />
        ))}
      </div>
    );
  }
}

export default Photowall;
