import React from "react";
import PropTypes from "prop-types";

function Image(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <img className="image" src={post.imageLink} alt={post.description} />
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button
          onClick={() => {
            props.onRemovePhoto(post);
          }}
        >
          Remove
        </button>
      </div>
    </figure>
  );
}

Image.propTypes = {
  onRemovePhoto: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

export default Image;
