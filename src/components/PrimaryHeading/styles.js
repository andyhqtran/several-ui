import { rem } from 'polished';
import styled from 'styled-components';

const StyledPrimaryHeading = styled.h1`
  margin-top: 0;
  margin-bottom: 12px;
  color: #2F1814;
  font-size: ${rem(36)};
  font-weight: 500;
  letter-spacing: -${rem(0.8)};
  line-height: ${rem(42)};
`;

export { StyledPrimaryHeading };
