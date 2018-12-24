import React, { Component } from "react";

class Image extends Component {
  render() {
    const post = this.props.post;
    return (
      <figure className="figure">
        <img className="image" src={post.imageLink} alt={post.description} />
      </figure>
    );
  }
}

export default Image;
