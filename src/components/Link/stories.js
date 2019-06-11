import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from './index';

storiesOf('Atoms|Link', module)
  .add('is default', () => (
    <Link href="https://google.com">
      Link →
    </Link>
  ));
