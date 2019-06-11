import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from '.';

storiesOf('Layout|Layout', module)
  .add('is default', () => (
    <Layout>
      <Layout.Header>
        Heading
      </Layout.Header>
      <Layout.Main>
        Main
      </Layout.Main>
      <Layout.Sidebar>
        Sidebar
      </Layout.Sidebar>
    </Layout>
  ));
