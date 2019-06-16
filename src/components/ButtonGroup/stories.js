import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../Button';
import ButtonGroup from '.';

storiesOf('Layouts|Button Group', module)
  .add('is default', () => (
    <ButtonGroup>
      <Button
        onClick={action('button clicked')}
        variant='primary'
      >
        Button
      </Button>
      <Button
        onClick={action('button clicked')}
        variant='secondary'
      >
        Button
      </Button>
    </ButtonGroup>
  ));
