import React, { Component } from "react";
import { Route } from "react-router-dom";

import Title from "./Title";
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "phones",
          imageLink:
            "https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          id: "1",
          description: "underwater",
          imageLink:
            "https://images.pexels.com/photos/1677275/pexels-photo-1677275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          id: "2",
          description: "spiral",
          imageLink:
            "https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
      ]
    };
    this.removePhoto = this.removePhoto.bind(this);
  }

  // Photowall -> image
  removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved)
    }));
  }

  componentDidMount = () => {
    console.log("cdm");
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(prevState.posts);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Route
          exact={true}
          path=""
          render={() => (
            <div>
              <Title title={"Photowall"} />
              <Photowall
                posts={this.state.posts}
                onRemovePhoto={this.removePhoto}
                onNavigate={this.navigate}
              />
            </div>
          )}
        />

        <Route path="/addPhoto" component={AddPhoto} />
      </div>
    );
  }
}

export default Main;
