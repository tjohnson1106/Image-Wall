import { connect } from "react-redux";

import Main from "./Main";

function mapStateToProps(state) {
  return {
    posts: state
  };
}

function mapDispatchToProps(dispatch) {}

// App = Main source of orgin for store
const App = connect(mapStateToProps)(Main);

export default App;
