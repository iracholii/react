import React from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

class App extends React.Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData =>
        this.setState({
          userData,
        }),
      );
  };

  render() {
    const { userData } = this.state;

    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={userData} />
        </header>
        <UserProfile userData={userData} />
      </div>
    );
  }
}

export default App;
