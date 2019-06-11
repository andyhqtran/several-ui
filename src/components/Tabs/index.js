import PropTypes from 'prop-types';
import React, { Children } from 'react';

import { StyledTabs, StyledTabsItem } from './styles';

const Tabs = props => (
  <Tabs.Element
    role="tablist"
    tabIndex={props.tabIndex}
  >
    {Children.toArray(props.children).map((tab, index) => {
      const selected = props.selected === (tab.props.index || index);

      return (
        <Tabs.Item
          index={tab.props.index}
          key={tab.props.index || index}
          onClick={() => props.onSelect(tab.props.index || index)}
          role="tab"
          selected={selected}
          tabIndex={tab.props.tabIndex}
        >
          {tab.props.children}
        </Tabs.Item>
      );
    })}
  </Tabs.Element>
);

Tabs.Element = StyledTabs;
Tabs.Item = StyledTabsItem;

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  tabIndex: PropTypes.number,
};

export default Tabs;
