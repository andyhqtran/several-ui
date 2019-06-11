import React from 'react';
import { storiesOf } from '@storybook/react';

import Logo from '.';

storiesOf('Atoms|Logo', module)
  .add('is default', () => (
    <Logo />
  ));
