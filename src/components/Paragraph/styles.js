import { rem } from 'polished';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  margin-top: 0;
  margin-bottom: 12px;
  color: #5F5452;
  font-size: ${rem(14)};
  line-height: ${rem(24)};

  &:last-child,
  &:only-child {
    margin-bottom: 0;
  }
`;

export { StyledParagraph };
