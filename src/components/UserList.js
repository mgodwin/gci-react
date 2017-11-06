import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './userlist.cssmodule.sass';
import User from './user'
import { addUser } from '../actions/'
import { connect } from 'react-redux'

class UserList extends React.Component {

  addUser() {
    this.props.dispatch(addUser("New", "User", "<No Address>"))
  }

  renderUser(user) {
    return (
      <User key={user.id} {...user} />
    )
  }

  render() {
    return (
      <div className="userlist-component" styleName="userlist-component">
        <div styleName="add-user"><button styleName="add-user-button" onClick={() => this.addUser()}>Add new user</button></div>
        <ul className="userlist" styleName="userlist">
          {this.props.users.map( user => this.renderUser(user))}
        </ul>
      </div>
    )
  }
}

UserList.displayName = 'UserList';
UserList.propTypes = {};
UserList.defaultProps = {};

export default connect()(cssmodules(UserList, styles));
