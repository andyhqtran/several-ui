import React from 'react';
import { storiesOf } from '@storybook/react';

import List from '.';

storiesOf('Atoms|List', module)
  .add('is default', () => (
    <List>
      <List.Title>List Title</List.Title>
      <List.Item>List Item</List.Item>
      <List.Item>List Item</List.Item>
      <List.Item>List Item</List.Item>
    </List>
  ));
