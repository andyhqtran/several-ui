import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledInput } from './styles';

const Input = forwardRef((props, ref) => (
  <Input.Element
    autoComplete={props.autoComplete}
    disabled={props.disabled}
    id={props.id}
    onBlur={props.onBlur}
    onChange={props.onChange}
    onFocus={props.onFocus}
    placeholder={props.placeholder}
    ref={ref}
    required={props.required}
    type={props.type}
    value={props.value}
  />
));

Input.displayName = 'Input';

Input.Element = StyledInput;

Input.defaultProps = {
  autoComplete: 'off',
  type: 'text',
};

Input.propTypes = {
  autoComplete: PropTypes.oneOf(['off', 'on']),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.oneOf([
    'email',
    'number',
    'password',
    'search',
    'tel',
    'text',
  ]),
  value: PropTypes.string,
};

export default Input;
