import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";

import Main from "./Main";
import { removePost } from "../redux/actions";

function mapStateToProps(state) {
  return {
    posts: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removePost }, dispatch);
}

// App = Main source of orgin for store
const App = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);

export default App;
