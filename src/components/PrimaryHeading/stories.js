import React from 'react';
import { storiesOf } from '@storybook/react';

import PrimaryHeading from '.';

storiesOf('Atoms|Primary Heading', module)
  .add('is default', () => (
    <PrimaryHeading>Primary heading</PrimaryHeading>
  ));
