import { database } from "../config/database";

// all action are mapped to props via bindActionCreator

// 010320191300 Props are currently being passed in to Single component

// remove
// index points to index number in post array

export function startAddingPost(post) {
  return (dispatch) => {
    return database
      .ref("posts")
      .update({
        [post.id]: post
      })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function startLoadingPost() {
  return (dispatch) => {
    return database
      .ref("posts")
      .once("value")
      .then((snapshot) => {
        let posts = [];
        snapshot.forEach((childSnapshot) => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPosts(posts));
      });
  };
}

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
export function addComment(comment, postId) {
  return {
    type: "ADD_COMMENT",
    comment,
    postId
  };
}

// post id to direct to proper node
export function startAddingComment(comment, postId) {
  return (dispatch) => {
    return (
      database
        .ref(`comments/${postId}`)
        // push appends comments to firebase unique ID
        .push(comment)
        .then(() => {
          dispatch(addComment(comment, postId));
        })
        .catch((error) => {
          console.log(
            "start adding comment error",
            error,
            "start adding comment error"
          );
        })
    );
  };
}

export function startRemovingPost(index, id) {
  return (dispatch) => {
    return database
      .ref(`posts/${id}`)
      .remove()
      .then(() => {
        dispatch(removePost(index));
      })
      .catch((error) => {
        console.log(
          "start removing post error",
          error,
          "start removing post error"
        );
      });
  };
}

export function loadPosts(posts) {
  return {
    type: "LOAD_POSTS",
    posts
  };
}
