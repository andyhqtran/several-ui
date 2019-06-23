import React from 'react';
import { storiesOf } from '@storybook/react';

import Hero from '.';

storiesOf('Organisms|Hero', module)
  .add('is default', () => (
    <Hero />
  ));
