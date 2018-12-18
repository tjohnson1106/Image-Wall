import React, { Component } from "react";

import Image from "./Image";

// receive posts into component

class Photowall extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <Image post={post} />
        ))}
      </div>
    );
  }
}

export default Photowall;
