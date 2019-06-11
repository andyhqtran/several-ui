import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '.';

storiesOf('Atoms|Input', module)
  .add('is default', () => (
    <Input
      type="text"
      placeholder="Input"
    />
  ));
