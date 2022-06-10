import React from 'react';
import PropTypes from 'prop-types';

class Numbers extends React.PureComponent {
  render() {
    const { title, number } = this.props;
    return (
      <div className="number">
        <span className="number__title">{title}</span>
        <span className="number__value">{number}</span>
      </div>
    );
  }
}

Numbers.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default Numbers;
