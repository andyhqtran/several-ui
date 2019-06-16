import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tabs from '.';

storiesOf('Atoms|Tabs', module)
  .add('is default', () => (
    <Tabs
      onSelect={action('tab selected')}
      selected='all'
    >
      <Tabs.Item index='all'>
        All
      </Tabs.Item>
      <Tabs.Item index='popular'>
        Most popular
      </Tabs.Item>
      <Tabs.Item index='latest'>
        Latest
      </Tabs.Item>
    </Tabs>
  ));
