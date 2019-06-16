import PropTypes from 'prop-types';
import React, { useReducer } from 'react';

import { FormContext } from './context';
import {
  FORM_CHANGE,
  FORM_RESET,
  FORM_SET_DEFAULT,
} from './constants';
// import { initialState, reducer } from './reducer';
import { StyledForm } from './styles';

const initialState = {
  default: {},
  errors: [],
  value: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case FORM_CHANGE:
      return {
        ...state,
        value: {
          ...state.value,
          [action.name]: [action.value],
        },
      };
    case FORM_RESET:
      return {
        ...state,
        value: state.default,
      };
    case FORM_SET_DEFAULT:
      return {
        ...state,
        default: {
          ...state.default,
          [action.name]: [action.value],
        },
        value: {
          ...state.value,
          [action.name]: [action.value],
        },
      };
    default:
      throw new Error();
  }
};

const Form = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Form.Element
      className={props.className}
      onReset={(event) => {
        dispatch({ type: FORM_RESET });

        if (props.onReset) {
          props.onReset(event);
        }
      }}
      onSubmit={props.onSubmit}
    >
      <FormContext.Provider
        value={{
          defaultValue: state.defaultValue,
          onChange: (name, value) => dispatch({
            type: FORM_CHANGE,
            name,
            value,
          }),
          onSetDefault: (name, value) => {
            dispatch({
              type: FORM_SET_DEFAULT,
              name,
              value,
            });
          },
          value: state.value,
        }}
      >
        {props.children}
      </FormContext.Provider>
    </Form.Element>
  );
};

Form.Element = StyledForm;

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  onReset: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Form;
