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
      <Button variant='primary'>
        View Divi posts
      </Button>
      <Button variant='secondary'>
        View top authors
      </Button>
    </ButtonGroup>
  </Hero.Element>
);

Hero.Element = StyledHero;

Hero.SecondaryTitle = StyledHeroSecondaryTitle;

Hero.Title = StyledHeroTitle;

export default Hero;
