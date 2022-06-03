/* eslint-disable camelcase */
import React from 'react';

class User extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(user =>
        this.setState({
          user,
        }),
      );
  };

  render() {
    if (!this.state.user) {
      return null;
    }

    const { avatar_url, name, location } = this.state.user;

    return (
      <div className="user">
        {/* <!-- avatar_url --> */}
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          {/* <!-- name --> */}
          <span className="user__name">{name}</span>
          {/* <!-- location --> */}
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
