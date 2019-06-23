import PropTypes from 'prop-types';
import React from 'react';

import { StyledAvatar, StyledAvatarImage } from './styles';

const Avatar = (props) => (
  <Avatar.Element className={props.className}>
    <Avatar.Image
      alt={props.alt}
      src={props.src}
      title={props.title}
    />
  </Avatar.Element>
);

Avatar.Element = StyledAvatar;

Avatar.Image = StyledAvatarImage;

Avatar.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
};

export default Avatar;
