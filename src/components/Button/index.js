import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledButton } from './styles';

const Button = forwardRef((props, ref) => (
  <Button.Element
    className={props.className}
    fullwidth={props.fullwidth}
    onClick={props.onClick}
    ref={ref}
    type={props.type}
    variant={props.variant}
  >
    {props.children}
  </Button.Element>
));

Button.Element = StyledButton;

Button.displayName = 'Button';

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  fullwidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'button',
    'reset',
    'submit',
  ]),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
  ]).isRequired,
};

export default Button;
