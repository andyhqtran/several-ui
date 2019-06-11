import React from 'react';
import { storiesOf } from '@storybook/react';

import Menu from '.';

storiesOf('Molecules|Menu', module)
  .add('is default', () => (
    <Menu>
      <Menu.Item>Widget item</Menu.Item>
      <Menu.Item>Widget item</Menu.Item>
      <Menu.Item>Widget item</Menu.Item>
      <Menu.Item>Widget item</Menu.Item>
    </Menu>
  ))
  .add('with header', () => (
    <Menu>
      <Menu.Header>Widget header</Menu.Header>
      <Menu.Item>Widget item</Menu.Item>
      <Menu.Item>Widget item</Menu.Item>
      <Menu.Item>Widget item</Menu.Item>
      <Menu.Item>Widget item</Menu.Item>
    </Menu>
  ))
  .add('with footer', () => (
    <Menu>
      <Menu.Item>Widget item</Menu.Item>
      <Menu.Item>Widget item</Menu.Item>
      <Menu.Item>Widget item</Menu.Item>
      <Menu.Item>Widget item</Menu.Item>
      <Menu.Footer>Widget footer</Menu.Footer>
    </Menu>
  ));
