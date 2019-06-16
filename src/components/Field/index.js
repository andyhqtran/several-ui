import PropTypes from 'prop-types';
import React, {
  Children,
  cloneElement,
  isValidElement,
  useContext,
  useEffect,
} from 'react';

import Button from '../Button';
import { FormContext } from '../Form/context';
import {
  StyledField,
  StyledFieldContent,
  StyledFieldHint,
  StyledFieldLabel,
  StyledFieldMeta,
} from './styles';

const Field = (props) => {
  const context = useContext(FormContext);

  const children = Children.toArray(props.children).filter(child => child.type !== Field.Hint && child.type !== Field.Label);

  const metaChildren = Children.toArray(props.children).filter(child => child.type === Field.Hint || child.type === Field.Label);

  return (
    <Field.Element className={props.className}>
      {(Array.isArray(metaChildren) && metaChildren.length > 0) && (
        <Field.Meta>
          {metaChildren}
        </Field.Meta>
      )}
      <Field.Content>
        {children.map((child) => {
          if (!isValidElement(child) || child.type === Button) {
            return child;
          }

          // @TODO: Add support for checkboxes
          // @TODO: Add support for disabled fields

          useEffect(() => {
            context.onSetDefault(child.props.name, child.props.value);
          }, []);

          return cloneElement(child, {
            disabled: child.props.disabled,
            name: child.props.name,
            onChange: (event) => {
              if (child.props.disabled) {
                return false;
              }

              return context.onChange(
                child.props.name,
                event.target.value,
              );
            },
            value: context.value[child.props.name] || '',
          });
        })}
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
