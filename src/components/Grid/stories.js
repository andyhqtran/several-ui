import React from 'react';
import { storiesOf } from '@storybook/react';

import Post from '../Post';
import Grid from '.';

storiesOf('Layouts|Grid', module)
  .add('is default', () => (
    <Grid>
      {['', '', '', '', '', '', '', ''].map(() => (
        <Post
          author='Author'
          name='Post title'
          image='//placehold.it/244x183/DB3317/DB3317'
        />
      ))}
    </Grid>
  ));
