import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../Button';
import Input from '../Input';
import Field from '.';

storiesOf('Layouts|Field', module)
  .add('is default', () => (
    <Field>
      <Field.Label>Field label</Field.Label>
      <Field.Hint>Field hint</Field.Hint>
      <Input />
      <Input />
      <Button>Button</Button>
    </Field>
  ))
  .add('has button', () => (
    <Field>
      <Field.Label>Field label</Field.Label>
      <Field.Hint>Field hint</Field.Hint>
      <Input />
      <Button>Button</Button>
    </Field>
  ))
  .add('has multiple inputs', () => (
    <Field>
      <Field.Label>Field label</Field.Label>
      <Field.Hint>Field hint</Field.Hint>
      <Input />
      <Input />
    </Field>
  ));
