import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import {
  StyledHero,
  StyledHeroSecondaryTitle,
  StyledHeroTitle,
} from './styles';

const Hero = (props) => (
  <Hero.Element>
    <Hero.Title>
      Several is a place where the best Divi resources live
    </Hero.Title>
    <Hero.SecondaryTitle>
      We will help you find the perfect Divi resources.
    </Hero.SecondaryTitle>
    <ButtonGroup>
      <Button
        onClick={() => props.router.push('/showcase')}
        variant='primary'
      >
        View Divi resources
      </Button>
      <Button
        onClick={() => props.router.push('/authors')}
        variant='secondary'
      >
        View top authors
      </Button>
    </ButtonGroup>
  </Hero.Element>
);

Hero.Element = StyledHero;

Hero.SecondaryTitle = StyledHeroSecondaryTitle;

Hero.Title = StyledHeroTitle;

Hero.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(Hero);
