import { rgba } from 'polished';
import styled from 'styled-components';

const StyledCard = styled.div`
  background: #FFFFFF;
  border-radius: 4px;
  box-shadow:
    inset 0 0 0 1px #E8E6E5,
    0 2px 0 ${rgba('#000000', 0.02)};
`;

export { StyledCard };
