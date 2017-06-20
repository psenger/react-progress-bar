import className from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './ProgressBar.css';

/**
 * Calculates the stop gap given the percentage.
 * If the percentage goes outside of the given range, it stops it.
 * @function
 * @private
 * @param {number} percentage - the percentage.
 * @returns {number}
 */
const stopGap = (percentage) => {
  if (percentage >= 100) return 100;
  if (percentage <= 0) return 0;
  return percentage;
};

/**
 * A test if the value is valid between a given range.
 * @function
 * @private
 * @param {number} percentage - the percentage.
 * @returns {boolean}
 */
const isValid = (percentage = 0) => {
  return (percentage >= 0 && percentage <= 100);
};

/**
 * A test if the value is invalid, outside a given range.
 * @function
 * @private
 * @param {number} percentage - the percentage.
 * @returns {boolean}
 */
const isInValid = (percentage) => !isValid(percentage);

/**
 * ProgressBar constructs the html needed to present a Progress bar.
 *
 * @function
 * @param {number} [percentage=0] - the percentage.
 * @returns {XML}
 */
const ProgressBar = ({ percentage }) => {

  let slideClassNames = className('progressbar--slide', {
    'progressbar--slide--valid': isValid(percentage),
    'progressbar--slide--invalid': isInValid(percentage)
  });

  return (
    <div className='progressbar--border' role='progressbar' aria-valuenow={percentage} aria-valuemin='0' aria-valuemax='100' aria-invalid={isInValid(percentage)} tabIndex={0} data-component-name='components/ProgressBar' >
      <div className={slideClassNames} style={{ width: stopGap(percentage) + '%' }} />
      <span className="progressbar--label">{percentage}&#37;</span>
    </div>
  );
};

/**
 * ProgressBar
 * @type {{percentage: number}}
 */
ProgressBar.propTypes = {
  percentage: PropTypes.number
};

/**
 * ProgressBar Default values
 * @type {{percentage: 0}}
 */
ProgressBar.defaultProps = {
  percentage: 0
};

export default ProgressBar;
