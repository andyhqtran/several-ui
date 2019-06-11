import styled from 'styled-components';

import Input from '../Input';

const StyledField = styled.div``;

const StyledFieldContent = styled.div`
  display: flex;
  align-itesm: center;

  ${Input.Element} {
    flex-grow: 1;
    margin-right: 12px;

    &:last-child,
    &:only-child {
      margin-right: 0;
    }
  }
`;

const StyledFieldHint = styled.div`
  color: #938E8C;
  font-size: 14px;
`;

const StyledFieldLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

const StyledFieldMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export {
  StyledField,
  StyledFieldContent,
  StyledFieldHint,
  StyledFieldLabel,
  StyledFieldMeta,
};
