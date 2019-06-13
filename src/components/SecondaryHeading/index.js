import PropTypes from 'prop-types';
import React from 'react';

import { StyledSecondaryHeading } from './styles';

const SecondaryHeading = props => (
  <SecondaryHeading.Element className={props.className}>
    {props.children}
  </SecondaryHeading.Element>
);

SecondaryHeading.Element = StyledSecondaryHeading;

SecondaryHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SecondaryHeading;
