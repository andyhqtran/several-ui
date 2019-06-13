import PropTypes from 'prop-types';
import React from 'react';

import { StyledHeading } from './styles';

const ELEMENT_MAP = {
  primary: 'h1',
  secondary: 'h2',
  tertiary: 'h3',
};

const Heading = props => (
  <Heading.Element
    as={ELEMENT_MAP[props.variant]}
    className={props.className}
    variant={props.variant}
  >
    {props.children}
  </Heading.Element>
);

Heading.Element = StyledHeading;

Heading.defaultProps = {
  variant: 'primary',
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
  ]),
};

export default Heading;
