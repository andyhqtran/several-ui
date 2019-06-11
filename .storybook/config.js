import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import React, { Fragment } from 'react';

import GlobalStyles from '../src/components/GlobalStyles';

addDecorator((module) => (
  <Fragment>
    <GlobalStyles />
    {module()}
  </Fragment>
));

const stories = require.context('../src/components', true, /\/stories\.js$/);

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Several',
      brandUrl: 'https://storybook.several.io',
      colorPrimary: '#DB3317',
      colorSecondary: '#DB3317',
      barSelectedColor: '#DB3317',
      fontBase: '-apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif',
    }),
  },
});

configure(() => {
  stories.keys().forEach((filename) => stories(filename));
}, module);
