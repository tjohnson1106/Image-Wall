import React, { Component } from "react";
import { Route } from "react-router-dom";

import Title from "./Title";
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import { removePost } from "../redux/actions";

class Main extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.removePost(1);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Route
          exact={true}
          path=""
          render={() => (
            <div>
              <Title title={"Photowall"} />
              {/* all props passed to PhotoWall */}
              <Photowall posts={this.props.posts} {...this.props} />
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
        //     /> */}
        // )} />
      </div>
    );
  }
}

export default Main;
