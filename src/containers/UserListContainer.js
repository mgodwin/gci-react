import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {} from '../actions/';
import Main from '../components/App';
import UserList from '../components/UserList'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
