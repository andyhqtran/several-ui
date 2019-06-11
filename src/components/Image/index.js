import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../Icon';
import { StyledImage, StyledImageEntity } from './styles';

const Image = props => (
  <Image.Element className={props.className}>
    {props.src ? (
      <Image.Entity
        alt={props.alt}
        src={props.src}
        title={props.title}
      />
    ) : (
      <Icon
        name="image"
        size={24}
      />
    )}
  </Image.Element>
);

Image.Element = StyledImage;
Image.Entity = StyledImageEntity;

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Image;
