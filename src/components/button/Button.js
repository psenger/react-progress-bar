import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * A basic Button Class used for creating html buttons.
 *
 * @class
 */
class Button extends Component {

  /**
   * Constructor
   * @constructor
   * @param {number|string} props.value - the value to pass the <code>onClickHandler</code>
   * @param {function} props.onClickHandler - On click handler
   */
  constructor(props) {
    super(props);
    this.displayName = 'components/Button';
    this.onClickHandlerProxy = this.onClickHandlerProxy.bind(this);
  }

  /**
   * On click handler proxy, which forwards on the prop's value to the <code>onClickHandler</code> attached to the <code>props</code.
   */
  onClickHandlerProxy() {
    this.props.onClickHandler(this.props.value);
  }

  /**
   * Standard React Render method
   * @returns {XML}
   */
  render() {
    let { value } = this.props;

    return (
      <button type='button' onClick={this.onClickHandlerProxy} tabIndex={0} data-component-name={this.displayName}>{value}</button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default Button;
