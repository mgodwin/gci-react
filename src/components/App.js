import React from 'react';
import YeomanImage from './YeomanImage';
import './app.css';
import UserListContainer from '../containers/UserListContainer'

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <UserListContainer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
