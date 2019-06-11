import PropTypes from 'prop-types';
import React from 'react';

import {
  StyledLayout,
  StyledLayoutMain,
  StyledLayoutHeader,
  StyledLayoutSidebar,
} from './styles';

const Layout = props => (
  <Layout.Element className={props.className}>
    {props.children}
  </Layout.Element>
);

Layout.Element = StyledLayout;
Layout.Header = StyledLayoutHeader;
Layout.Main = StyledLayoutMain;
Layout.Sidebar = StyledLayoutSidebar;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default Layout;
