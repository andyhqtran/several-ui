import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '.';

storiesOf('Organisms|Header', module)
  .add('is default', () => (
    <Header />
  ));
