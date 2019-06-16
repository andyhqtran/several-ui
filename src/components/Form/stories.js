import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Field from '../Field';
import Input from '../Input';
import Form from '.';

storiesOf('Layout|Form', module)
  .add('is default', () => (
    <Form>
      <Field>
        <Field.Label>
          Username
        </Field.Label>
        <Input
          disabled
          name="username"
          placeholder="Username"
          value="several"
        />
      </Field>
      <Field>
        <Field.Label>
          Name
        </Field.Label>
        <Input
          name="first_name"
          placeholder="First name"
          required
        />
        <Input
          name="last_name"
          placeholder="Last name"
          required
        />
      </Field>
      <Field>
        <Field.Label>
          Email address
        </Field.Label>
        <Input
          name="email"
          placeholder="Email address"
          required
          type="email"
        />
      </Field>
      <Field>
        <Field.Label>
          Password
        </Field.Label>
        <Input
          name="password"
          placeholder="Password"
          required
          type="password"
        />
      </Field>
      <ButtonGroup>
        <Button type="submit">Save</Button>
        <Button
          type="reset"
          variant="secondary"
        >
          Reset
        </Button>
      </ButtonGroup>
    </Form>
  ));
