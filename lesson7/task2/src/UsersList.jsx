import React from 'react';
import User from './User';

class UsersList extends React.Component {
  state = {
    sorting: null,
  };

  onClickHandler = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
    this.setState({
      sorting: newSorting,
    });
  };

  render() {
    let usersList = this.props.users;
    if (this.state.sorting) {
      usersList = this.props.users
        .slice()
        .sort((a, b) => (this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age));
    }

    return (
      <div>
        <button className="btn" onClick={this.onClickHandler}>
          {this.state.sorting || '-'}
        </button>
        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
