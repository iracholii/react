import React from 'react';
import PropTypes from 'prop-types';

class OddNumbers extends React.PureComponent {
  shouldComponentUpdate(nextProps) {
    if (nextProps.number % 2 === 0) {
      return false;
    }
    return true;
  }

  render() {
    const { number } = this.props;
    return (
      <div className="number">
        <span className="number__title">Odd number</span>
        <span className="number__value">{number}</span>
      </div>
    );
  }
}

OddNumbers.propTypes = {
  number: PropTypes.number.isRequired,
};

export default OddNumbers;
