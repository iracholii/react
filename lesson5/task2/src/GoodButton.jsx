import React from 'react';

class GoodButton extends React.Component {
  onClickHandler(event) {
    alert(event.target.textContent);
  }

  render() {
    return (
      <button className="fancy-button" onClick={this.onClickHandler}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
