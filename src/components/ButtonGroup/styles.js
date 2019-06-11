import styled from 'styled-components';

import Button from '../Button';

const StyledButtonGroup = styled.div`
  display: flex;

  ${Button.Element} {
    margin-right: 12px;

    &:last-child,
    &:only-child {
      margin-right: 0;
    }
  }
`;

export { StyledButtonGroup };
