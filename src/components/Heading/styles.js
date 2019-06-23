import { rem } from 'polished';
import styled, { css } from 'styled-components';

const primaryStyles = css`
  font-size: ${rem(36)};
  letter-spacing: -${rem(0.8)};
  line-height: ${rem(42)};
`;

const secondaryStyles = css`
  font-size: ${rem(24)};
  letter-spacing: -${rem(0.4)};
  line-height: ${rem(28)};
`;

const tertiaryStyles = css`
  font-size: ${rem(24)};
  letter-spacing: -${rem(0.4)};
  line-height: ${rem(28)};
`;

const StyledHeading = styled.h1`
  margin-top: 0;
  margin-bottom: 12px;
  color: #2F1814;
  font-weight: 500;

  ${(props) => props.variant === 'primary' && primaryStyles}

  ${(props) => props.variant === 'secondary' && secondaryStyles}

  ${(props) => props.variant === 'tertiary' && tertiaryStyles}
`;

export { StyledHeading };
