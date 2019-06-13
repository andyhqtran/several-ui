import React from 'react';
import { storiesOf } from '@storybook/react';

import Breadcrumb from '.';

storiesOf('Atoms|Breadcrumb', module)
  .add('is default', () => (
    <Breadcrumb
      items={[
        {
          name: 'Home',
          selected: false,
        },
        {
          name: 'Showcase',
          selected: true,
        },
      ]}
    />
  ));
