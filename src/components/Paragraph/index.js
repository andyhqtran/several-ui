import PropTypes from 'prop-types';
import React from 'react';

import { StyledParagraph } from './styles';

const Paragraph = props => (
  <Paragraph.Element className={props.className}>
    {props.children}
  </Paragraph.Element>
);

Paragraph.Element = StyledParagraph;

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default Paragraph;
