import PropTypes from 'prop-types';
import React from 'react';

import { StyledGrid } from './styles';

const Grid = (props) => (
  <Grid.Element
    className={props.className}
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
  variant: 'grid',
};

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  columns: PropTypes.string,
  gap: PropTypes.number,
  variant: PropTypes.oneOf(['grid', 'inline-grid']),
};

export default Grid;
