import { rem, rgba } from 'polished';
import styled from 'styled-components';

const StyledInput = styled.input`
  outline: none;
  display: ${props => props.fullwidth ? 'block' : 'inline-block'};
  width: ${props => props.fullwidth ? '100%' : 'auto'};
  background: #FFFFFF;
  height: 40px;
  border: 0;
  border-radius: 4px;
  box-shadow:
    inset 0 0 0 1px #E8E6E5,
    inset 0 3px 0 ${rgba('#000000', 0.02)};
  padding: 0 16px;
  color: #2F1814;
  font-size: ${rem(14)};
  vertical-align: top;
  transition: box-shadow 0.2s ease;

  &:focus {
    box-shadow:
      inset 0 0 0 1px #DB3317,
    inset 0 3px 0 ${rgba('#000000', 0.02)};
  }
`;

export { StyledInput };
