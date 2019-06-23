import PropTypes from 'prop-types';
import React from 'react';

import Avatar from '../Avatar';
import Bold from '../Bold';
import Heading from '../Heading';
import Link from '../Link';
import {
  StyledUser,
  StyledUserFooter,
  StyledUserMeta,
} from './styles';

const User = (props) => (
  <User.Element>
    <Avatar
      alt={props.name}
      src={props.image}
      title={props.name}
    />
    <Heading>{props.name}</Heading>
    <Link href={props.href}>
      View profile
    </Link>
    <User.Footer>
      <User.Meta>
        <Bold>{props.popularity}</Bold>
        Popularity
      </User.Meta>
      <User.Meta>
        <Bold>{props.posts}</Bold>
        Post
      </User.Meta>
      <User.Meta>
        <Bold>{props.hearts}</Bold>
        Hearts
      </User.Meta>
    </User.Footer>
  </User.Element>
);

User.Element = StyledUser;

User.Footer = StyledUserFooter;

User.Meta = StyledUserMeta;

User.propTypes = {
  hearts: PropTypes.number,
  href: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  popularity: PropTypes.string,
  posts: PropTypes.number,
};

export default User;
