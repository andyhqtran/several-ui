import React from 'react';
import { storiesOf } from '@storybook/react';

import LegalNavigationWidget from '.';

storiesOf('Organisms|Legal Navigation Widget', module)
  .add('is default', () => (
    <div style={{ maxWidth: 254 }}>
      <LegalNavigationWidget />
    </div>
  ));
