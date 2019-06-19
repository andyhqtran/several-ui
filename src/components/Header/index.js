import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
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
        selected={props.router.pathname}
      >
        <Navigation.Item href='/'>
          Home
        </Navigation.Item>
        <Navigation.Item href='/showcase'>
          Showcase
        </Navigation.Item>
        <Navigation.Item href='/authors'>
          Authors
        </Navigation.Item>
      </Navigation>
      <ButtonGroup>
        <Button
          onClick={() => props.router.push('/login')}
          variant='tertiary'
        >
          Sign in
        </Button>
        <Button
          onClick={() => props.router.push('/join')}
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

Header.defaultProps = {
  router: {},
};

Header.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    push: PropTypes.func,
  }),
};

export default withRouter(Header);
