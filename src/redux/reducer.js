import posts from "../data/posts";

const postReducer = function posts(state = posts, action) {
  switch (action.type) {
    case "REMOVE_POST":
      return [
        // previous state to remove
        ...state.slice(0, action.index),
        // determining state subsequent to index of removed post
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

export default postReducer;
