import React from 'react';
import { storiesOf } from '@storybook/react';

import Heading from '.';

storiesOf('Atoms|Heading', module)
  .add('is primary', () => (
    <Heading variant='primary'>
      Primary heading
    </Heading>
  ))
  .add('is secondary', () => (
    <Heading variant='secondary'>
      Secondary heading
    </Heading>
  ))
  .add('is tertiary', () => (
    <Heading variant='tertiary'>
      Tertiary heading
    </Heading>
  ));
