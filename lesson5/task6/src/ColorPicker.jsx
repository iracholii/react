import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  onMouseHandler(color) {
    this.setState({
      title: color,
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.onMouseHandler('Coral')}
            onMouseLeave={() => this.onMouseHandler('')}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.onMouseHandler('Aqua')}
            onMouseLeave={() => this.onMouseHandler('')}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.onMouseHandler('Bisque')}
            onMouseLeave={() => this.onMouseHandler('')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
