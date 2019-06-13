import { rem } from 'polished';
import styled from 'styled-components';

const StyledSecondaryHeading = styled.h2`
  margin-top: 0;
  margin-bottom: 12px;
  color: #2F1814;
  font-size: ${rem(24)};
  font-weight: 500;
  letter-spacing: -${rem(0.4)};
  line-height: ${rem(28)};
`;

export { StyledSecondaryHeading };
