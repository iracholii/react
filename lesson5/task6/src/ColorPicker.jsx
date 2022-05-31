import React from 'react';

class ColorPicker extends React.Component {
  onMouseHandler(color) {
    document.querySelector('.picker__title').textContent = color;
  }

  render() {
    return (
      <div>
        <div className="picker__title"></div>
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
