import { lighten, rgba } from 'polished';
import styled, { css } from 'styled-components';

const primaryStyles = css`
  background-color: #DB3317;
  box-shadow:
    inset 0 0 0 1px ${rgba('#000000', 0.12)},
    0 2px 0 ${rgba('#000000', 0.08)};
  color: #FFFFFF;
  transition: background-color 0.2s ease;

  &:focus,
  &:hover {
    background-color: ${lighten(0.12, '#DB3317')};
  }
`;

const secondaryStyles = css`
  background-color: transparent;
  box-shadow:
    inset 0 0 0 1px #DB3317,
    0 2px 0 ${rgba('#000000', 0.08)};
  color: #DB3317;
  transition: background-color 0.2s ease;

  &:focus,
  &:hover {
    background-color: ${rgba('#DB3317', 0.12)};
  }
`;

const tertiaryStyles = css`
  background-color: transparent;
  box-shadow: none;
  color: #DB3317;
  transition: color 0.2s ease;

  &:focus,
  &:hover {
    color: ${lighten(0.12, '#DB3317')};
  }
`;

const StyledButton = styled.button`
  outline: none;
  height: 40px;
  border: 0;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 40px;
  cursor: pointer;

  ${props => props.variant === 'primary' && primaryStyles};

  ${props => props.variant === 'secondary' && secondaryStyles};

  ${props => props.variant === 'tertiary' && tertiaryStyles};
`;

export { StyledButton };
