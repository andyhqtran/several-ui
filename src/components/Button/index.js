import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledButton } from './styles';

const Button = forwardRef((props, ref) => (
  <Button.Element
    className={props.className}
    onClick={props.onClick}
    ref={ref}
    variant={props.variant}
  >
    {props.children}
  </Button.Element>
));

Button.Element = StyledButton;

Button.displayName = 'Button';

Button.defaultProps = {
  variant: 'primary',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
  ]).isRequired,
};

export default Button;
