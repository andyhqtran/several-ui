import PropTypes from 'prop-types';
import React, { Children, cloneElement } from 'react';

import { StyledNavigation, StyledNavigationItem, StyledNavigationTitle } from './styles';

const Navigation = props => (
  <Navigation.Element
    className={props.className}
    direction={props.direction}
  >
    {Children.map(props.children, child => cloneElement(child, {
      direction: props.direction,
      selected: props.selected === child.props.to,
    }))}
  </Navigation.Element>
);

Navigation.Element = StyledNavigation;
Navigation.Item = StyledNavigationItem;
Navigation.Title = StyledNavigationTitle;

Navigation.defaultProps = {
  direction: 'vertical',
};

Navigation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  selected: PropTypes.string.isRequired,
};

export default Navigation;
