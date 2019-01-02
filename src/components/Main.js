import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import Single from "./Single";

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
        <Route
          path="/single/:id"
          render={(params) => <Single {...this.props} {...params} />}
        />
      </div>
    );
  }
}

export default Main;
