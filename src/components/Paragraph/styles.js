import styled from 'styled-components';

const StyledParagraph = styled.p`
  margin-bottom: 24px;
  color: #5F5452;
  font-size: 16px;
  line-height: 24px;

  &:last-child,
  &:only-child {
    margin-bottom: 0;
  }
`;

export { StyledParagraph };
