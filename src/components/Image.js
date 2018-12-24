import React, { Component } from "react";

class Image extends Component {
  render() {
    const post = this.props.post;
    return (
      <figure className="figure">
        <img className="image" src={post.imageLink} alt={post.description} />
        <figcaption>
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button className="remove-button">Remove</button>
        </div>
      </figure>
    );
  }
}

export default Image;
