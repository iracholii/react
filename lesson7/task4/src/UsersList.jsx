import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
    totalItems: this.props.users.length,
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
    const { currentPage, totalItems, itemsPerPage } = this.state;

    const pagination = (
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
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
