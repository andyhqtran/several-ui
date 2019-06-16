import PropTypes from 'prop-types';
import React from 'react';

import { StyledBold } from './styles';

const Bold = (props) => (
  <Bold.Element>
    {props.children}
  </Bold.Element>
);

Bold.Element = StyledBold;

Bold.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Bold;
