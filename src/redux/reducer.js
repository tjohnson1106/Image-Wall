import { combineReducers } from "redux";

import _posts from "../data/posts";

////////////////////////////////////////////////////////////
// App.js -> returned state: posts: state.posts////////////
// App.js -> returned state: comments: state.comments/////
/////////////////////////////////////////////////////////

function comments(state = {}, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      // remember: action.postId<not an array> =
      // ^action.comment<array> (ES6)

      // if undefined(no postID is not stateful return [action.postId]: [action.comment])
      // else postID exists comments array + new comment

      if (!state[action.postId]) {
        return { ...state, [action.postId]: [action.comment] };
      } else {
        return {
          ...state,
          [action.postId]: [...state[action.postId], action.comment]
        };
      }

    default:
      return state;
  }

  return state;
}

function posts(state = _posts, action) {
  switch (action.type) {
    case "REMOVE_POST":
      return [
        // previous state to remove
        ...state.slice(0, action.index),
        // determining state subsequent to index of removed post
        ...state.slice(action.index + 1)
      ];
    case "ADD_POST":
      return [...state, action.post];
    // updated state
    case "LOAD_POSTS":
      return action.posts;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts,
  comments
});

export default rootReducer;
