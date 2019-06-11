import PropTypes from 'prop-types';
import React from 'react';

import { StyledList, StyledListItem, StyledListTitle } from './styles';

const List = props => (
  <List.Element className={props.className}>
    {props.children}
  </List.Element>
);

List.Element = StyledList;
List.Item = StyledListItem;
List.Title = StyledListTitle;

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default List;
