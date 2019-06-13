import { rem } from 'polished';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  margin-bottom: 24px;
  color: #5F5452;
  font-size: ${rem(16)};
  line-height: ${rem(24)};

  &:last-child,
  &:only-child {
    margin-bottom: 0;
  }
`;

export { StyledParagraph };
