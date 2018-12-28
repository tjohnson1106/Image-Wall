import React, { Component } from "react";

class AddPhoto extends Component {
  render() {
    return (
      <div>
        <h1>Photo Wall</h1>
        <div className="form">
          <form>
            <input type="text" placeholder="link" />
            <input type="text" placeholder="description" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
