import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button';
import Field from '../Field';
import Form from '../Form';
import Input from '../Input';
import Paragraph from '../Paragraph';
import Widget from '../Widget';

const NewsletterWidget = (props) => (
  <Widget.Element className={props.className}>
    <Widget.Title>
      Newsletter
    </Widget.Title>
    <Paragraph>
      Get product announcements delivered right to your inbox.
    </Paragraph>
    <Form>
      <Field>
        <Input
          fullwidth
          placeholder='Enter email addresss'
        />
      </Field>
      <Field>
        <Button
          fullwidth
          variant='primary'
        >
          Subscribe
        </Button>
      </Field>
    </Form>
  </Widget.Element>
);

NewsletterWidget.propTypes = {
  className: PropTypes.string,
};

export default NewsletterWidget;
