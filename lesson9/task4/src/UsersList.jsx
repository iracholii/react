import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  state = {
    filterText: '',
  };

  changeHandler = event => {
    this.setState({
      filterText: event.target.value,
    });
  };

  render() {
    const { users } = this.props;
    const { filterText } = this.state;

    const list = filterText
      ? users.filter(user => user.name.toLowerCase().includes(filterText.toLowerCase()))
      : users;

    const count = list.length;

    return (
      <div>
        <Filter filterText={filterText} count={count} onChange={this.changeHandler} />
        <ul className="users">
          {list.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
