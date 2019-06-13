import React from 'react';
import { storiesOf } from '@storybook/react';

import Post from '.';

storiesOf('Molecules|Featured Post', module)
  .add('is default', () => (
    <div style={{ maxWidth: 512 }}>
      <Post
        author="Author"
        name="Post title"
        image="//placehold.it/512x244/DB3317/DB3317"
      />
    </div>
  ));
