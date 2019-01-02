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
    this.props.dispatch(removePost(1));
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
              <Photowall
                posts={this.props.posts}
                // onRemovePhoto={this.removePhoto}
                // onNavigate={this.navigate}
              />
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
