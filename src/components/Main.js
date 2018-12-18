import React, { Component } from "react";

import Title from "./Title";
import Photowall from "./Photowall";

const posts = [
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
];

class Main extends Component {
  render() {
    return (
      <div>
        <Title title={"Photowall"} />
        <Photowall posts={posts} />
      </div>
    );
  }
}

export default Main;
