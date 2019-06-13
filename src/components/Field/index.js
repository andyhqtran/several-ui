import PropTypes from 'prop-types';
import React, { Children } from 'react';

import {
  StyledField,
  StyledFieldContent,
  StyledFieldHint,
  StyledFieldLabel,
  StyledFieldMeta,
} from './styles';

const Field = (props) => {
  const children = Children.toArray(props.children).filter(child => child.type !== Field.Hint && child.type !== Field.Label);

  const metaChildren = Children.toArray(props.children).filter(child => child.type === Field.Hint || child.type === Field.Label);

  return (
    <Field.Element className={props.className}>
      {!(Array.isArray(metaChildren) || metaChildren.length) && (
        <Field.Meta>
          {metaChildren}
        </Field.Meta>
      )}
      <Field.Content>
        {children}
      </Field.Content>
    </Field.Element>
  );
};

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
