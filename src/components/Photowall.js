import React from "react";
import PropTypes from "prop-types";

import Image from "./Image";

// receive posts into function

function Photowall(props) {
  return (
    <div>
      <button className="addIcon"> + </button>
      <div className="image-grid">
        {props.posts.map((post, index) => (
          <Image key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
};

export default Photowall;
