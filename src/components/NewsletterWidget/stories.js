import React from 'react';
import { storiesOf } from '@storybook/react';

import NewsletterWidget from '.';

storiesOf('Organisms|Newsletter Widget', module)
  .add('is default', () => (
    <div style={{ maxWidth: 254 }}>
      <NewsletterWidget />
    </div>
  ));
