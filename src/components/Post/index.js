import PropTypes from 'prop-types';
import React from 'react';

import Image from '../Image';

import {
  StyledPost,
  StyledPostAuthor,
  StyledPostMeta,
  StyledPostTitle,
} from './styles';

const Post = props => (
  <Post.Element
    className={props.className}
    onClick={props.onClick}
  >
    <Image
      alt={props.name}
      src={props.image}
    />
    <Post.Meta>
      <Post.Title>{props.name}</Post.Title>
      <Post.Author>{props.author}</Post.Author>
    </Post.Meta>
  </Post.Element>
);

Post.Author = StyledPostAuthor;

Post.Element = StyledPost;

Post.Meta = StyledPostMeta;

Post.Title = StyledPostTitle;

Post.propTypes = {
  author: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  image: PropTypes.string,
};

export default Post;
