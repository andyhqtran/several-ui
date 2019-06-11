import PropTypes from 'prop-types';
import React from 'react';

import { StyledCard } from './styles';

const Card = props => (
  <Card.Element className={props.className}>
    {props.children}
  </Card.Element>
);

Card.Element = StyledCard;

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Card;
