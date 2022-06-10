import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
  state = {
    isExpanded: false,
  };

  toggleBtnHandler = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  };

  render() {
    const { children, title } = this.props;
    const { isExpanded } = this.state;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleBtnHandler}>
            {isExpanded ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        {isExpanded && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}

Expand.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Expand;
