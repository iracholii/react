/* eslint-disable camelcase */

import React from 'react';

class User extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate() {
    this.fetchUser(this.props.match.params.userId);
  }

  fetchUser = userId =>
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        } else {
          return response.json();
        }
      })
      .then(({ avatar_url, name, location }) =>
        this.setState({
          user: { avatar_url, name, location },
        }),
      );

  render() {
    const { user } = this.state;

    if (!user) {
      return null;
    }

    return (
      <div className="user">
        <img alt="User Avatar" src={user.avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{user.name}</span>
          <span className="user__location">{user.location}</span>
        </div>
      </div>
    );
  }
}

export default User;
