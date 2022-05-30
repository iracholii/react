/* <div class="search">
  <h1 class="search__title">Hello, Tom. What to search for you?</h1>
  <div class="search__field">
    <input type="text" class="search__input" />
    <button class="search__button">Search</button>
  </div>
</div> */

import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <h1 className="search__title">{`Hello, ${this.props.name}. What to search for you?`}</h1>
        <div className="search__field">
          <input type="text" class="search__input" />
          <button className="search__button">Search</button>
        </div>
      </div>
    );
  }
}

export default Search;
