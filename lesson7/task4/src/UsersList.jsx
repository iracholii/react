import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
    itemsPerPage: 3,
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const { currentPage, itemsPerPage } = this.state;

    const pagination = (
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={this.props.users.length}
        currentPage={currentPage}
        goPrev={this.goPrev}
        goNext={this.goNext}
      />
    );

    return (
      <div>
        {pagination}
        <ul className="users">
          {this.props.users
            .slice(itemsPerPage * (currentPage - 1), itemsPerPage * currentPage)
            .map(user => (
              <User key={user.id} {...user} />
            ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
