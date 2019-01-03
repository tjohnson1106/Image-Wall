import React from "react";
import PropTypes from "prop-types";

import Image from "./Image";
import Comments from "./Comments";

// Image Comments -> Single presentational

function Single(props) {
  const { match, posts } = props;
  const id = Number(match.params.id);
  const post = posts.find((post) => post.id === id);
  const comments = props.comments;

  console.log(post);
  // TODO: must implement remove photo
  return (
    <div className="single-photo">
      <Image post={post} />
      <Comments addComment={props.addComment} comments={comments} />
    </div>
  );
}

// number should be required after comments build

Single.propTypes = {
  id: PropTypes.number,
  match: PropTypes.object,
  posts: PropTypes.array
};

export default Single;
