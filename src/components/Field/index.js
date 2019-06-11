import PropTypes from 'prop-types';
import React, { Children } from 'react';

import {
  StyledField,
  StyledFieldContent,
  StyledFieldHint,
  StyledFieldLabel,
  StyledFieldMeta,
} from './styles';

const Field = props => (
  <Field.Element className={props.className}>
    <Field.Meta>
      {Children.toArray(props.children).filter(child => child.type === Field.Hint || child.type === Field.Label)}
    </Field.Meta>
    <Field.Content>
      {Children.toArray(props.children).filter(child => child.type !== Field.Hint && child.type !== Field.Label)}
    </Field.Content>
  </Field.Element>
);

Field.Element = StyledField;

Field.Content = StyledFieldContent;

Field.Hint = StyledFieldHint;

Field.Label = StyledFieldLabel;

Field.Meta = StyledFieldMeta;

Field.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default Field;
