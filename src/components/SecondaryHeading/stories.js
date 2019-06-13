import React from 'react';
import { storiesOf } from '@storybook/react';

import SecondaryHeading from '.';

storiesOf('Atoms|Secondary Heading', module)
  .add('is default', () => (
    <SecondaryHeading>Secondary heading</SecondaryHeading>
  ));
