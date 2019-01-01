import React, { Component } from "react";
import { Route } from "react-router-dom";

import Title from "./Title";
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.state.posts);
    return (
      <div>
        <Route
          exact={true}
          path=""
          render={() => (
            <div>
              <Title title={"Photowall"} />
              {/* <Photowall
                posts={this.state.posts}
                onRemovePhoto={this.removePhoto}
                onNavigate={this.navigate}
              /> */}
            </div>
          )}
        />
        {/* <Route
          path="/addPhoto"
          render={({ history }) => (
            <AddPhoto
              onAddPhoto={(addedPosts) => {
                this.addPhoto(addedPosts);
                history.push("./");
              }}
            /> */}
        )} />
      </div>
    );
  }
}

export default Main;
