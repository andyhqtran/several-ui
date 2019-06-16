import styled from 'styled-components';

import Field from '../Field';

const StyledForm = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  ${Field.Element} {
    width: 100%;
  }
`;

export { StyledForm };
