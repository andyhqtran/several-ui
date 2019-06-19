import React from 'react';
import { storiesOf } from '@storybook/react';

import ContentLayout from '.';

storiesOf('Layouts|Content Layout', module)
  .add('is default', () => (
    <ContentLayout>
      <ContentLayout.Header>
        Heading
      </ContentLayout.Header>
      <ContentLayout.Main>
        Main
      </ContentLayout.Main>
      <ContentLayout.Sidebar>
        Sidebar
      </ContentLayout.Sidebar>
    </ContentLayout>
  ));
