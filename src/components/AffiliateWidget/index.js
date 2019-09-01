import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Bold from '../Bold';
import Image from '../Image';
import Link from '../Link';
import Paragraph from '../Paragraph';
import Widget from '../Widget';
import { StyledAffiliateWidget } from './styles';

const AffiliateWidget = (props) => (
  <AffiliateWidget.Element className={props.className}>
    <Widget.Title>
      Affiliate
      <Link href='/legal/disclosure'>
        Disclosure
      </Link>
    </Widget.Title>
    <NextLink href={props.href}>
      <a>
        {props.image && (
          <Image
            alt={props.image.alt}
            src={props.image.src}
          />
        )}
        <Paragraph>
          <Bold>Divi — The most popular premium WordPress theme in the world.</Bold>
        </Paragraph>
      </a>
    </NextLink>
  </AffiliateWidget.Element>
);

AffiliateWidget.Element = StyledAffiliateWidget;

AffiliateWidget.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
};

export default AffiliateWidget;
