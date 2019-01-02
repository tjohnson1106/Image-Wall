import React from "react";
import PropTypes from "prop-types";

import Image from "./Image";

function Single(props) {
  const { match, posts } = props;
  const id = Number(match.params.id);
  const post = posts.find((post) => post.id === id);

  console.log(post);
  // TODO: must implement remove photo
  return (
    <div className="single-photo">
      <Image post={post} />
    </div>
  );
}

Single.propTypes = {
  id: PropTypes.number.isRequired,
  match: PropTypes.object,
  posts: PropTypes.object.isRequired
};

export default Single;
