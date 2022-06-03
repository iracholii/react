import React from 'react';

class Dimensions extends React.Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResizeHandler);
    const { innerHeight, innerWidth } = window;
    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeHandler);
  }

  onResizeHandler = event => {
    const { innerWidth, innerHeight } = event.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${width} x ${height}`;
  };

  render() {
    return (
      <div className="dimensions">
        {this.state.width}px - {this.state.height}px
      </div>
    );
  }
}

export default Dimensions;
