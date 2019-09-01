import PropTypes from 'prop-types';
import React from 'react';

import { StyledWidget, StyledWidgetTitle } from './styles';

const Widget = (props) => (
  <Widget.Element className={props.className}>
    {props.children}
  </Widget.Element>
);

Widget.Element = StyledWidget;

Widget.Title = StyledWidgetTitle;

Widget.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default Widget;
