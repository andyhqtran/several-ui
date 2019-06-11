import React from 'react';
import { storiesOf } from '@storybook/react';

import Navigation from '.';

storiesOf('Atoms|Navigation', module)
  .add('is horizontal', () => (
    <Navigation
      direction="horizontal"
      selected="/one"
    >
      <Navigation.Item to="/one">Navigation Item</Navigation.Item>
      <Navigation.Item to="/two">Navigation Item</Navigation.Item>
      <Navigation.Item to="/three">Navigation Item</Navigation.Item>
    </Navigation>
  ))
  .add('is vertical', () => (
    <Navigation
      direction="vertical"
      selected="one"
    >
      <Navigation.Title>Navigation Title</Navigation.Title>
      <Navigation.Item to="/one">Navigation Item</Navigation.Item>
      <Navigation.Item to="/two">Navigation Item</Navigation.Item>
      <Navigation.Item to="/three">Navigation Item</Navigation.Item>
    </Navigation>
  ));
