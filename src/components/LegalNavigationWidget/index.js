import PropTypes from 'prop-types';
import React from 'react';

import SidebarNavigation from '../SidebarNavigation';
import Widget from '../Widget';

const LegalNavigationWidget = (props) => (
  <Widget className={props.className}>
    <SidebarNavigation>
      <SidebarNavigation.Item href='/legal/privacy-policy'>
        Privacy Policy
      </SidebarNavigation.Item>
      <SidebarNavigation.Item href='/legal/security'>
        Security
      </SidebarNavigation.Item>
      <SidebarNavigation.Item href='/legal/security'>
        Terms of Service
      </SidebarNavigation.Item>
      <SidebarNavigation.Item href='/legal/security'>
        Affiliate Disclosure
      </SidebarNavigation.Item>
    </SidebarNavigation>
  </Widget>
);

LegalNavigationWidget.propTypes = {
  className: PropTypes.string,
};

export default LegalNavigationWidget;
