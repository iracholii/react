import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Off',
    };
  }
  onClickHandler = () => {
    this.setState({
      status: this.state.status === 'Off' ? 'On' : 'Off',
    });
  };
  render() {
    return (
      <div className="toggler" onClick={this.onClickHandler}>
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;
