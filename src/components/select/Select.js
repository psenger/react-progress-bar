import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * @typedef {Object} event - a dom event
 * @property {Object} target - a dom target.
 * @property {*} target.value - the value
 */

/**
 * A basic Select Class used for creating html select tags.
 *
 * @class
 */
class Select extends Component {

  /**
   * Constructor
   * @param {Object} props - basic Properties object
   * @param {number|string} props.value - the value to pass the <code>onClickHandler</code>
   * @param {onChangeHandler} props.onChangeHandler - On click handler which is passed the selected value.
   * @constructor
   */
  constructor(props) {
    super(props);
    this.displayName = 'components/Select';
    this.onChangeHandlerProxy = this.onChangeHandlerProxy.bind(this);
  }

  /**
   * This proxy method, fires the call back defined in the props <code>onChangeHandler</code> and sends it the selected value.
   * @param {event} event
   */
  onChangeHandlerProxy(event) {
    this.props.onChangeHandler(event.target.value);
  }

  render() {
    let { name, value, children } = this.props;

    return (
      <select name={name} value={value} onChange={this.onChangeHandlerProxy} data-component-name={this.displayName} tabIndex={0}>{children}</select>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node, // PropTypes.arrayOf(),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default Select;
