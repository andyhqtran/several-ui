import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React, { Children } from 'react';

import { StyledNavigation, StyledNavigationItem, StyledNavigationTitle } from './styles';

const Navigation = (props) => (
  <Navigation.Element
    className={props.className}
    direction={props.direction}
  >
    {Children.map(props.children, (child) => {
      if (child.type !== Navigation.Item) {
        return child;
      }

      return (
        <NextLink
          as={props.as}
          href={child.props.href}
          passHref
        >
          <Navigation.Item
            direction={props.direction}
            href={child.props.href}
            onClick={child.props.onClick}
            selected={props.selected === child.props.href}
          >
            {child.props.children}
          </Navigation.Item>
        </NextLink>
      );
    })}
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
