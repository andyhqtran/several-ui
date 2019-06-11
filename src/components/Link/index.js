import PropTypes from 'prop-types';
import React from 'react';

import { StyledLink } from './styles';

const Link = props => (
  <Link.Element
    className={props.className}
    href={props.href}
  >
    {props.children}
  </Link.Element>
);

Link.Element = StyledLink;

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
};

export default Link;
