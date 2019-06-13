import React from 'react';
import { storiesOf } from '@storybook/react';

import Badge from '.';

storiesOf('Atoms|Badge', module)
  .add('is default', () => (
    <Badge>
      Badge
    </Badge>
  ));
