import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '.';

storiesOf('Atoms|Input', module)
  .add('is default', () => (
    <Input
      placeholder='Input'
      type='text'
    />
  ))
  .add('is disabled', () => (
    <Input
      disabled
      placeholder='Input'
      type='text'
    />
  ));
