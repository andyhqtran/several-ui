import PropTypes from 'prop-types';
import React from 'react';

import {
  StyledContentLayout,
  StyledContentLayoutHeader,
  StyledContentLayoutMain,
  StyledContentLayoutSidebar,
} from './styles';

const ContentLayout = (props) => (
  <ContentLayout.Element className={props.className}>
    {props.children}
  </ContentLayout.Element>
);

ContentLayout.Element = StyledContentLayout;

ContentLayout.Header = StyledContentLayoutHeader;

ContentLayout.Main = StyledContentLayoutMain;

ContentLayout.Sidebar = StyledContentLayoutSidebar;

ContentLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default ContentLayout;
