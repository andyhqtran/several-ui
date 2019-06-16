import PropTypes from 'prop-types';
import React from 'react';

import Breadcrumb from '../Breadcrumb';
import Heading from '../Heading';
import { StyledPageHeader } from './styles';

const PageHeader = (props) => (
  <PageHeader.Element className={props.className}>
    <Breadcrumb items={props.items} />
    <Heading variant='primary'>
      {props.name}
    </Heading>
  </PageHeader.Element>
);

PageHeader.Element = StyledPageHeader;

PageHeader.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    selected: PropTypes.bool,
  })),
  name: PropTypes.string,
};

export default PageHeader;
