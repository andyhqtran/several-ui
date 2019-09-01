import PropTypes from 'prop-types';
import React from 'react';

import Badge from '../Badge';
import Image from '../Image';

import {
  StyledPost,
  StyledPostAuthor,
  StyledPostDetails,
  StyledPostMeta,
  StyledPostTitle,
} from './styles';

const Post = (props) => (
  <Post.Element
    className={props.className}
    onClick={props.onClick}
  >
    <Image
      alt={props.name}
      src={props.image}
    />
    <Post.Details>
      <Post.Meta>
        <Post.Title>{props.name}</Post.Title>
        <Post.Author>{props.author}</Post.Author>
      </Post.Meta>
      {typeof props.price === 'number' && (
        <Badge>
          {props.price > 0
            ? `$${props.price}`
            : 'Free'}
        </Badge>
      )}
    </Post.Details>
  </Post.Element>
);

Post.Author = StyledPostAuthor;

Post.Details = StyledPostDetails;

Post.Element = StyledPost;

Post.Meta = StyledPostMeta;

Post.Title = StyledPostTitle;

Post.defaultProps = {
  author: 'Author',
  name: 'Post Title',
};

Post.propTypes = {
  author: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default Post;
