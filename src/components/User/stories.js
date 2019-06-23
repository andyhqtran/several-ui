import React from 'react';
import { storiesOf } from '@storybook/react';

import User from '.';

storiesOf('Molecules|User', module)
  .add('is default', () => (
    <div style={{ width: 256 }}>
      <User
        hearts={0}
        image='//placehold.it/80/DB3317/DB3317'
        name='John Doe'
        posts={0}
        popularity='Top 1%'
      />
    </div>
  ));
