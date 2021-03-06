import React from 'react';
import { storiesOf } from '@storybook/react';

import Post from '.';

storiesOf('Molecules|Post', module)
  .add('is default', () => (
    <div style={{ maxWidth: 244 }}>
      <Post
        author='Author'
        name='Post title'
        image='//placehold.it/244x183/DB3317/DB3317'
      />
    </div>
  ))
  .add('is free', () => (
    <div style={{ maxWidth: 244 }}>
      <Post
        author='Author'
        image='//placehold.it/244x183/DB3317/DB3317'
        name='Post title'
        price={0}
      />
    </div>
  ))
  .add('has price', () => (
    <div style={{ maxWidth: 244 }}>
      <Post
        author='Author'
        image='//placehold.it/244x183/DB3317/DB3317'
        name='Post title'
        price={65}
      />
    </div>
  ));
