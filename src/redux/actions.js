// all action are mapped to props via bindActionCreator

// 010320191300 Props are currently being passed in to Single component

// remove
// index points to index number in post array
export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index
  };
}

// adding post
// post -> payload
export function addPost(post) {
  return {
    type: "ADD_POST",
    post
  };
}

// add comments
// payload -> comment
export function addComment(comment) {
  return {
    type: "ADD_COMMENT",
    comment
  };
}
