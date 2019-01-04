import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import Single from "./Single";

class Main extends Component {
  // fix refresh is component state see Single component loading conditional
  state = {
    loading: true
  };

  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({
        loading: false
      });
    });
    this.props.startLoadingComments();
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
          render={(params) => (
            <Single loading={this.state.loading} {...this.props} {...params} />
          )}
        />
      </div>
    );
  }
}

export default Main;
