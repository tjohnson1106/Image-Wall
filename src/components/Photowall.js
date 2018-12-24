import React from "react";

import Image from "./Image";

// receive posts into function

function Photowall(props) {
  return (
    <div className="image-grid">
      {props.posts.map((post, index) => (
        <Image key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
      ))}
    </div>
  );
}

export default Photowall;
