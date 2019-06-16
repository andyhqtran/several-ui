import PropTypes from 'prop-types';
import NextLink from 'next/link';
import React from 'react';

import { StyledLink } from './styles';

const Link = (props) => (
  <Link.Next
    as={props.as}
    href={props.href}
    passHref
  >
    <Link.Element className={props.className}>
      {props.children}
    </Link.Element>
  </Link.Next>
);

Link.Element = StyledLink;

Link.Next = NextLink;

Link.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
};

export default Link;
