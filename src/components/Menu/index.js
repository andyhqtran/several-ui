import PropTypes from 'prop-types';
import React from 'react';

import {
  StyledMenu,
  StyledMenuFooter,
  StyledMenuHeader,
  StyledMenuItem,
} from './styles';

const Menu = props => (
  <Menu.Element className={props.className}>
    {props.children}
  </Menu.Element>
);

Menu.Element = StyledMenu;
Menu.Footer = StyledMenuFooter;
Menu.Header = StyledMenuHeader;
Menu.Item = StyledMenuItem;

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default Menu;
