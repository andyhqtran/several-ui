import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '.';

storiesOf('Atoms|Button', module)
  .add('is primary', () => (
    <Button
      onClick={action('button clicked')}
      variant="primary"
    >
      Button
    </Button>
  ))
  .add('is secondary', () => (
    <Button
      onClick={action('button clicked')}
      variant="secondary"
    >
      Button
    </Button>
  ))
  .add('is tertiary', () => (
    <Button
      onClick={action('button clicked')}
      variant="tertiary"
    >
      Button
    </Button>
  ));
