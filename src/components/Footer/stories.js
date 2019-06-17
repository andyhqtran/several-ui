import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Footer from '.';

storiesOf('Organisms|Footer', module)
  .add('is default', () => (
    <Fragment>
      <div style={{ height: 100 }} />
      <Footer />
    </Fragment>
  ));
