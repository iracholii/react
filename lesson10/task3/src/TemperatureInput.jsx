import React from 'react';

class TemperatureInput extends React.Component {
  scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
  };

  handleChange = event => {
    this.props.onTemperatureChange(event.target.value);
  };

  render() {
    const { temperature, scale } = this.props;

    return (
      <fieldset>
        <legend>Enter temperature in {this.scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
