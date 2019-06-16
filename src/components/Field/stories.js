import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../Button';
import Input from '../Input';
import Form from '../Form';
import Field from '.';

storiesOf('Layouts|Field', module)
  .add('is default', () => (
    <Form>
      <Field>
        <Field.Label>Field label</Field.Label>
        <Field.Hint>Field hint</Field.Hint>
        <Input />
        <Input />
        <Button type='submit'>Button</Button>
      </Field>
    </Form>
  ))
  .add('has button', () => (
    <Form>
      <Field>
        <Field.Label>Field label</Field.Label>
        <Field.Hint>Field hint</Field.Hint>
        <Input />
        <Button type='submit'>Button</Button>
      </Field>
    </Form>
  ))
  .add('has multiple inputs', () => (
    <Form>
      <Field>
        <Field.Label>Field label</Field.Label>
        <Field.Hint>Field hint</Field.Hint>
        <Input />
        <Input />
      </Field>
    </Form>
  ));
