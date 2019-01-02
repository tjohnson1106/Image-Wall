import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Title from "./Title";
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import { removePost } from "../redux/actions";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          <Link to="/">PhotoWall</Link>
        </h1>
        <Route
          exact={true}
          path=""
          render={() => (
            <div>
              {/* all props passed to PhotoWall */}
              <Photowall posts={this.props.posts} {...this.props} />
            </div>
          )}
        />
        <Route
          path="/addPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
      </div>
    );
  }
}

export default Main;
