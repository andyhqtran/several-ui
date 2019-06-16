import React from 'react';
import { storiesOf } from '@storybook/react';

import PageHeader from '.';

storiesOf('Molecules|Page Header', module)
  .add('is default', () => (
    <PageHeader
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
      name='Page name'
    />
  ));
