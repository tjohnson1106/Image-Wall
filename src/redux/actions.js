// remove
// index points to index number in post array
export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index: index
  };
}

// adding post
