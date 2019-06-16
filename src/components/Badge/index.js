import PropTypes from 'prop-types';
import React from 'react';

import { StyledBadge } from './styles';

const Badge = (props) => (
  <Badge.Element className={props.className}>
    {props.children}
  </Badge.Element>
);

Badge.Element = StyledBadge;

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default Badge;
