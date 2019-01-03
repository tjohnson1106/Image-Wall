import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";

import Main from "./Main";
import * as actions from "../redux/actions";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

// App = Main source of orgin for store
const App = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);

export default App;
