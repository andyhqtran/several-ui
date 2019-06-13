import { rem } from 'polished';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #DB3317;
  font-size: ${rem(16)};
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export { StyledLink };
