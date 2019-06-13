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

  ${props => props.variants === 'primary' && primaryStyles}

  ${props => props.variants === 'secondary' && secondaryStyles}

  ${props => props.variants === 'tertiary' && tertiaryStyles}
`;

export { StyledHeading };
