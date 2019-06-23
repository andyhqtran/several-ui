import PropTypes from 'prop-types';
import React from 'react';

import { StyledGrid } from './styles';

const Grid = (props) => (
  <Grid.Element
    columns={props.columns}
    gap={props.gap}
    variant={props.variant}
  >
    {props.children}
  </Grid.Element>
);

Grid.Element = StyledGrid;

Grid.defaultProps = {
  columns: 3,
  gap: 24,
};

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  columns: PropTypes.string,
  gap: PropTypes.number,
  variant: PropTypes.oneOf(['grid', 'inline-grid']),
};

export default Grid;
