import PropTypes from 'prop-types';
import React from 'react';

import { StyledShowcaseGrid } from './styles';

const ShowcaseGrid = (props) => (
  <ShowcaseGrid.Element
    columns={props.columns}
    gap={props.gap}
    variant={props.variant}
  >
    {props.children}
  </ShowcaseGrid.Element>
);

ShowcaseGrid.Element = StyledShowcaseGrid;

ShowcaseGrid.defaultProps = {
  columns: 3,
  gap: 24,
  variant: 'grid',
};

ShowcaseGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  columns: PropTypes.string,
  gap: PropTypes.number,
  variant: PropTypes.oneOf(['grid', 'inline-grid']),
};

export default ShowcaseGrid;
