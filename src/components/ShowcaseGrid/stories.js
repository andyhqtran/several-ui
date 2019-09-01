import React from 'react';
import { storiesOf } from '@storybook/react';

import FeaturedPost from '../FeaturedPost';
import Post from '../Post';
import ShowcaseGrid from '.';

storiesOf('Layouts|Showcase Grid', module)
  .add('is default', () => (
    <ShowcaseGrid>
      <Post
        author='Author'
        name='Post title'
        image='//placehold.it/244x183/DB3317/DB3317'
      />
      <Post
        author='Author'
        name='Post title'
        image='//placehold.it/244x183/DB3317/DB3317'
      />
      <Post
        author='Author'
        name='Post title'
        image='//placehold.it/244x183/DB3317/DB3317'
      />
      <FeaturedPost
        author='Author'
        name='Post title'
        image='//placehold.it/244x183/DB3317/DB3317'
      />
      <Post
        author='Author'
        name='Post title'
        image='//placehold.it/244x183/DB3317/DB3317'
      />
      <Post
        author='Author'
        name='Post title'
        image='//placehold.it/244x183/DB3317/DB3317'
      />
      <Post
        author='Author'
        name='Post title'
        image='//placehold.it/244x183/DB3317/DB3317'
      />
      <Post
        author='Author'
        name='Post title'
        image='//placehold.it/244x183/DB3317/DB3317'
      />
      <Post
        author='Author'
        name='Post title'
        image='//placehold.it/244x183/DB3317/DB3317'
      />
      <Post
        author='Author'
        name='Post title'
        image='//placehold.it/244x183/DB3317/DB3317'
      />
      <Post
        author='Author'
        name='Post title'
        image='//placehold.it/244x183/DB3317/DB3317'
      />
      <Post
        author='Author'
        name='Post title'
        image='//placehold.it/244x183/DB3317/DB3317'
      />
    </ShowcaseGrid>
  ));
