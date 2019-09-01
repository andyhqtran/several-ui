import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { Children } from 'react';

import {
  StyledSidebarNavigation,
  StyledSidebarNavigationItem,
} from './styles';

const SidebarNavigation = (props) => {
  const router = useRouter() || {};

  return (
    <SidebarNavigation.Element className={props.className}>
      {Children.map(props.children, (child) => (
        <NextLink
          as={child.props.as}
          href={child.props.href}
          passHref
        >
          <SidebarNavigation.Item isActive={router.pathname === child.props.href}>
            {child.props.children}
          </SidebarNavigation.Item>
        </NextLink>
      ))}
    </SidebarNavigation.Element>
  );
};

SidebarNavigation.Element = StyledSidebarNavigation;

SidebarNavigation.Item = StyledSidebarNavigationItem;

SidebarNavigation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default SidebarNavigation;
