import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/Main";
import "./styles/stylesheet.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Main />, document.getElementById("root"));

serviceWorker.unregister();
