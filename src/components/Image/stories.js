import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from '.';

storiesOf('Molecules|Image', module)
  .add('is default', () => (
    <Image
      src='//placehold.it/280x170/FBF9F8/FBF9F8'
    />
  ))
  .add('has no image', () => (
    <Image />
  ));
