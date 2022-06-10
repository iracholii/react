import React from 'react';
import PropTypes from 'prop-types';

class EvenNumbers extends React.PureComponent {
  shouldComponentUpdate(nextProps) {
    if (nextProps.number % 2 !== 0) {
      return false;
    }
    return true;
  }

  render() {
    const { number } = this.props;
    return (
      <div className="number">
        <span className="number__title">Even number</span>
        <span className="number__value">{number}</span>
      </div>
    );
  }
}

EvenNumbers.propTypes = {
  number: PropTypes.number.isRequired,
};

export default EvenNumbers;
