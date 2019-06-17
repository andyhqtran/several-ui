import Router from 'next/router';
import React from 'react';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Logo from '../Logo';
import Navigation from '../Navigation';

import {
  StyledHeader,
  StyledHeaderContent,
} from './styles';

const Header = (props) => (
  <Header.Element>
    <Header.Content>
      <Logo />
      <Navigation
        direction='horizontal'
        selected='/'
      >
        <Navigation.Item to='/'>
          Home
        </Navigation.Item>
        <Navigation.Item to='/showcase'>
          Showcase
        </Navigation.Item>
        <Navigation.Item to='/authors'>
          Authors
        </Navigation.Item>
      </Navigation>
      <ButtonGroup>
        <Button
          onClick={() => Router.push('/login')}
          variant='tertiary'
        >
          Sign in
        </Button>
        <Button
          onClick={() => Router.push('/join')}
          variant='primary'
        >
          Join Today — It's Free
        </Button>
      </ButtonGroup>
    </Header.Content>
  </Header.Element>
);

Header.Content = StyledHeaderContent;

Header.Element = StyledHeader;

Header.propTypes = {};

export default Header;
