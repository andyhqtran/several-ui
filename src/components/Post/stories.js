import React from 'react';
import { storiesOf } from '@storybook/react';

import Post from '.';

storiesOf('Molecules|Post', module)
  .add('is default', () => (
    <Post
      author="Author"
      name="Post title"
      image="//placehold.it/244x183/DB3317/DB3317"
    />
  ));