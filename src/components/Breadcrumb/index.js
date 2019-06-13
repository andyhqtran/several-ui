import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import {
  StyledBreadcrumb,
  StyledBreadcrumbDivider,
  StyledBreadcrumbItem,
} from './styles';

const Breadcrumb = props => (
  <Breadcrumb.Element>
    {props.items.map((item) => {
      if (item.selected) {
        return (
          <Breadcrumb.Item
            key={item.name}
            selected
          >
            {item.name}
          </Breadcrumb.Item>
        );
      }

      return (
        <Fragment>
          <Breadcrumb.Item key={item.name}>
            {item.name}
          </Breadcrumb.Item>
          <Breadcrumb.Divider />
        </Fragment>
      );
    })}
  </Breadcrumb.Element>
);

Breadcrumb.Element = StyledBreadcrumb;

Breadcrumb.Divider = StyledBreadcrumbDivider;

Breadcrumb.Item = StyledBreadcrumbItem;

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    selected: PropTypes.bool,
  })),
};

export default Breadcrumb;
