import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Image from "./Image";

// receive posts into function

function Photowall(props) {
  return (
    <div>
      <Link className="addIcon" to="/addPhoto">
        {" "}
        Add Photo{" "}
      </Link>

      <div className="image-grid">
        {props.posts
          .sort(function(x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Image key={index} post={post} {...props} index={index} />
          ))}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Photowall;
