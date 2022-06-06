import React from 'react';

class Search extends React.Component {
  state = {
    value: '',
  };

  changeHandler = event => {
    this.setState({
      value: event.target.value,
    });
  };

  searchHandler = event => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.searchHandler}>
        <input
          type="text"
          className="search__input"
          onChange={this.changeHandler}
          value={this.state.value}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
