import PropTypes from 'prop-types';
import React from 'react';

import { StyledPrimaryHeading } from './styles';

const PrimaryHeading = props => (
  <PrimaryHeading.Element className={props.className}>
    {props.children}
  </PrimaryHeading.Element>
);

PrimaryHeading.Element = StyledPrimaryHeading;

PrimaryHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PrimaryHeading;
