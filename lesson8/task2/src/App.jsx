import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  state = {
    isVisible: true,
  };

  onClickHandler = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    const clocks = (
      <>
        <Clock location="London" offset={0} />
        <Clock location="Kyiv" offset={2} />
        <Clock location="New York" offset={-5} />
      </>
    );

    return (
      <>
        <button className="btn" onClick={this.onClickHandler}>
          Toggle
        </button>
        {this.state.isVisible && clocks}
      </>
    );
  }
}

export default App;
