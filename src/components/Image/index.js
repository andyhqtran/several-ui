import PropTypes from 'prop-types';
import React from 'react';

import { StyledImage, StyledImageEntity } from './styles';

const Image = props => (
  <Image.Element>
    <Image.Entity
      alt={props.alt}
      src={props.src}
      title={props.title}
    />
  </Image.Element>
);

Image.Element = StyledImage;
Image.Entity = StyledImageEntity;

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Image;
