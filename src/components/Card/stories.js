import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '.';

storiesOf('Atoms|Card', module)
  .add('is default', () => (
    <Card>
      Card
    </Card>
  ));
