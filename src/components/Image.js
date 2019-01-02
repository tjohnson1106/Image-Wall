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
        {/* have access to all props in main */}
        <button
          onClick={() => {
            props.removePost(props.index);
          }}
        >
          Remove
        </button>
      </div>
    </figure>
  );
}

Image.propTypes = {
  post: PropTypes.object.isRequired
};

export default Image;
