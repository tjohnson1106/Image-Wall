import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./redux/reducer";
import Main from "./components/Main";
import "./styles/stylesheet.css";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
