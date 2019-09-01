import React from 'react';
import { storiesOf } from '@storybook/react';

import SidebarNavigation from '.';

storiesOf('Atoms|Sidebar Navigation', module)
  .add('is default', () => (
    <div style={{ maxWidth: 254 }}>
      <SidebarNavigation>
        <SidebarNavigation.Item href='/'>
          Link
        </SidebarNavigation.Item>
        <SidebarNavigation.Item href='/2'>
          Link
        </SidebarNavigation.Item>
      </SidebarNavigation>
    </div>
  ));
