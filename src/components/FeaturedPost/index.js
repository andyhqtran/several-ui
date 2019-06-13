import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button';
import Image from '../Image';
import Link from '../Link';

import {
  StyledFeaturedPost,
  StyledFeaturedPostAuthor,
  StyledFeaturedPostDetails,
  StyledFeaturedPostMeta,
  StyledFeaturedPostTitle,
} from './styles';

const Post = props => (
  <Post.Element className={props.className}>
    <Image
      alt={props.name}
      src={props.image}
    />
    <Post.Details>
      <Post.Meta>
        <Post.Title>{props.name}</Post.Title>
        <Post.Author>{props.author}</Post.Author>
      </Post.Meta>
      <Button onClick={props.onClick}>
        {props.price > 0
          ? `Purchase for $${props.price}`
          : 'Download for free'}
      </Button>
    </Post.Details>
    <Link href="/faq/featured-post">How can I get my theme featured?</Link>
  </Post.Element>
);

Post.Author = StyledFeaturedPostAuthor;

Post.Details = StyledFeaturedPostDetails;

Post.Element = StyledFeaturedPost;

Post.Meta = StyledFeaturedPostMeta;

Post.Title = StyledFeaturedPostTitle;

Post.propTypes = {
  author: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  price: PropTypes.number,
};

export default Post;
