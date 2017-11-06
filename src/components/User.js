import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './user.cssmodule.sass';
import { deleteUser, updateUser } from '../actions/'
import { connect } from 'react-redux'

class User extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editMode: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  delete() {
    this.props.dispatch(deleteUser(this.props.id))
  }

  toggleMode() {
    this.setState({editMode: true})
  }

  handleSubmit(e) {
    e.preventDefault()
    const firstName = this.firstNameInput.value
    const lastName = this.lastNameInput.value
    const address = this.addressInput.value
    this.props.dispatch(updateUser(this.props.id, firstName, lastName, address))
    this.setState({editMode: false})
  }

  render() {
    if (this.state.editMode === false) {
      return this.renderView()
    } else {
      return this.renderEdit()
    }
  }

  renderView() {
    return(
      <li className="user" styleName="user" onClick={() => this.toggleMode()}>
        <div className="name" styleName="name">
          <span className="first-name">{this.props.firstName}</span> {this.props.lastName}
        </div>
        <div> {this.props.address} </div>
        <div className="delete" styleName="delete-user" onClick={() => this.delete()}> X </div>
      </li>
    )
  }

  renderEdit() {
    return (
      <li className="user" styleName="user">
        <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" defaultValue={this.props.firstName} ref={(input) => this.firstNameInput = input } />
          <input type="text" defaultValue={this.props.lastName} ref={(input) => this.lastNameInput = input} />
        </div>
        <div>
          <input type="text" defaultValue={this.props.address} ref={(input) => this.addressInput = input} />
        </div>
        <button styleName="save"> Save </button>
        </form>
      </li>
    )
  }
}

User.displayName = 'User';
User.propTypes = {};
User.defaultProps = {};

export default connect()(cssmodules(User, styles));
