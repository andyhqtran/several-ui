import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from '.';

storiesOf('Atoms|Avatar', module)
  .add('is default', () => (
    <Avatar
      alt='John Doe'
      src='//placehold.it/40/DB3317/DB3317'
      title='John Doe'
    />
  ));
