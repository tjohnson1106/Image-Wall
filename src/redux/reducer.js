import { combineReducers } from "redux";

import _posts from "../data/posts";

function comments(state = [], action) {
  return state;
}

////////////////////////////////////////////////////////////
// App.js -> returned state: posts: state.posts////////////
// App.js -> returned state: comments: state.comments/////
/////////////////////////////////////////////////////////

function posts(state = _posts, action) {
  console.log(action.type);
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
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts,
  comments
});

export default rootReducer;
