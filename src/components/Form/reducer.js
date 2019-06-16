import { FORM_CHANGE } from './constants';

const initialState = {
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
    default:
      throw new Error();
  }
};

export {
  initialState,
  reducer,
};
