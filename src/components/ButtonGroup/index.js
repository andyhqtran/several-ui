import PropTypes from 'prop-types';
import React from 'react';

import { StyledButtonGroup } from './styles';

const ButtonGroup = (props) => (
  <ButtonGroup.Element className={props.className}>
    {props.children}
  </ButtonGroup.Element>
);

ButtonGroup.Element = StyledButtonGroup;

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default ButtonGroup;
