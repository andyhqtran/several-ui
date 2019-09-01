import React from 'react';
import { storiesOf } from '@storybook/react';

import AffiliateWidget from '.';

storiesOf('Organisms|Affiliate Widget', module)
  .add('is default', () => (
    <div style={{ maxWidth: 254 }}>
      <AffiliateWidget
        image={{
          alt: 'Divi — The most popular premium WordPress theme in the world.',
          src: '//placehold.it/280x170/FBF9F8/FBF9F8',
        }}
      />
    </div>
  ));
