import PropTypes from 'prop-types';
import React from 'react';

/**
 * A basic Section class used to creating html <code>section</code> and <code>h#</code> tags for proper accessibility navigation.
 *
 * @param {string} title - the title of the HTML section, used by screen readers and SEO outline tools to categorise sections of content.
 * @param {number} level - the heading level
 * @param {node|[node]|string|null} children - these are JSX children to render
 * @returns {XML}
 */
const Section = ({ title, level, children }) => {

  return (
    <section data-component-name='components/Section'>
      {level === 1 ? <h1>{title}</h1> : null}
      {level === 2 ? <h2>{title}</h2> : null}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  title: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired
};

// Section.defaultProps = {
//   title: 'Not Set',
//   level: 1
// };

export default Section;
