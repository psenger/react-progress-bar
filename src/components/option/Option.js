import PropTypes from 'prop-types';
import React from 'react';

/**
 * A basic Option class used by the <code>Select</code> creating html options.
 *
 * @function
 * @param {number|string} value - the value in the option
 * @param {number|string} text - the text that appears in the option tag.
 * @returns {XML}
 */
const Option = ({ value, text }) => {
  return (
    <option value={value} data-component-name='components/Option'>{text}</option>
  );
};

Option.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  text: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
};

export default Option;
