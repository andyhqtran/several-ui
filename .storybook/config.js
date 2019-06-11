import { configure } from '@storybook/react';

const stories = require.context('../src', true, /\/story\.js$/);

configure(() => {
  stories.keys().forEach((filename) => homepage(stories));
}, module);
