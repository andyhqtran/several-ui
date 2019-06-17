import React from 'react';

import Link from '../Link';
import Navigation from '../Navigation';
import {
  StyledFooter,
  StyledFooterBottom,
  StyledFooterColumn,
  StyledFooterContent,
  StyledFooterCopyright,
} from './styles';

const Footer = (props) => (
  <Footer.Element>
    <Footer.Content>
      <Footer.Column>
        <Navigation>
          <Navigation.Title>
            Several
          </Navigation.Title>
          <Navigation.Item href='/about'>
            About
          </Navigation.Item>
          <Navigation.Item href='/about'>
            Blog
          </Navigation.Item>
          <Navigation.Item href='/about'>
            Community
          </Navigation.Item>
        </Navigation>
      </Footer.Column>
      <Footer.Column>
        <Navigation>
          <Navigation.Title>
            Support
          </Navigation.Title>
          <Navigation.Item href='/about'>
            Help center
          </Navigation.Item>
          <Navigation.Item href='/about'>
            Affilates
          </Navigation.Item>
          <Navigation.Item href='/about'>
            Partnerships
          </Navigation.Item>
        </Navigation>
      </Footer.Column>
      <Footer.Column>
        <Navigation>
          <Navigation.Title>
            Legal
          </Navigation.Title>
          <Navigation.Item href='/legal/privacy-policy'>
            Privacy policy
          </Navigation.Item>
          <Navigation.Item href='/legal/security'>
            Security
          </Navigation.Item>
          <Navigation.Item href='/legal/terms-of-service'>
            Terms of service
          </Navigation.Item>
          <Navigation.Item href='/legal/affilates-disclosure'>
            Affilates disclosure
          </Navigation.Item>
        </Navigation>
      </Footer.Column>
      <Footer.Column>
        {/* @TODO: Add in Subscribe component */}
      </Footer.Column>
    </Footer.Content>
    <Footer.Bottom>
      <Footer.Copyright>
        Copyright {new Date().getFullYear()} <Link href='/'>Several.io</Link>
      </Footer.Copyright>
      {/* @TODO: Add in Icon button component */}
    </Footer.Bottom>
  </Footer.Element>
);

Footer.Bottom = StyledFooterBottom;

Footer.Column = StyledFooterColumn;

Footer.Content = StyledFooterContent;

Footer.Copyright = StyledFooterCopyright;

Footer.Element = StyledFooter;

export default Footer;
