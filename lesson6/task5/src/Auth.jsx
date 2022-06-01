import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  onLoginHandler = () => {
    this.setState({
      isProcessing: true,
    });
    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };
  onLogoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  render() {
    if (this.state.isProcessing) {
      return <Spinner size="48px" />;
    }
    return this.state.isLoggedIn ? (
      <Logout onLogout={this.onLogoutHandler} />
    ) : (
      <Login onLogin={this.onLoginHandler} />
    );
  }
}

export default Auth;
