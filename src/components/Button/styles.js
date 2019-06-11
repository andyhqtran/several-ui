import { rgba } from 'polished';
import styled, { css } from 'styled-components';

const primaryStyles = css`
  background-color: #DB3317;
  box-shadow:
    inset 0 0 0 1px ${rgba('#000000', 0.12)},
    0 2px 0 ${rgba('#000000', 0.08)};
  color: #FFFFFF;
`;

const secondaryStyles = css`
  background-color: transparent;
  box-shadow:
    inset 0 0 0 1px #DB3317,
    0 2px 0 ${rgba('#000000', 0.08)};
  color: #DB3317;
`;

const tertiaryStyles = css`
  background-color: transparent;
  box-shadow: none;
  color: #2F1814;

  &:hover {
    color: #DB3317;
  }
`;

const StyledButton = styled.button`
  height: 40px;
  border: 0;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 500;
  line-height: 40px;
  cursor: pointer;

  ${(props) => props.variant === 'primary' && primaryStyles};

  ${(props) => props.variant === 'secondary' && secondaryStyles};

  ${(props) => props.variant === 'tertiary' && tertiaryStyles};
`;

export { StyledButton };
