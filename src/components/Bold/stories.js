import React from 'react';
import { storiesOf } from '@storybook/react';

import Paragraph from '../Paragraph';
import Bold from '.';

storiesOf('Atoms|Bold', module)
  .add('is default', () => (
    <Paragraph>
      The &#60;strong&#62; element is for content that is of&nbsp;
      <Bold>&ldquo;strong importance,&rdquo;</Bold>
      &nbsp;including things of great seriousness or urgency (such as warnings).
    </Paragraph>
  ));
