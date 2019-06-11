import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './index';

storiesOf('Atoms|List', module)
  .add('is default', () => (
    <List>
      <List.Title>List Title</List.Title>
      <List.Item>List Item</List.Item>
      <List.Item>List Item</List.Item>
      <List.Item>List Item</List.Item>
    </List>
  ));
