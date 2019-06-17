import { rem } from 'polished';
import styled, { css } from 'styled-components';

const StyledNavigation = styled.nav.attrs({
  role: 'navigation',
})`
  display: flex;

  ${(props) => props.direction === 'vertical' && css`
    align-items: flex-start;
    flex-direction: column;
  `}
`;

const StyledNavigationItem = styled.a`
  color: inherit;
  font-size: ${rem(14)};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  ${(props) => props.direction === 'horizontal' && css`
    margin-right: 48px;
  `}

  ${(props) => props.direction === 'vertical' && css`
    margin-bottom: 12px;
  `}

  ${(props) => props.selected && css`
    color: #DB3317;
    font-weight: 500;
  `}

  &:hover {
    color: #DB3317;
  }
`;

const StyledNavigationTitle = styled.div`
  font-size: ${rem(16)};
  font-weight: 500;

  ${(props) => props.direction === 'horizontal' && css`
    margin-right: 48px;
  `}

  ${(props) => props.direction === 'vertical' && css`
    margin-bottom: 12px;
  `}
`;

export {
  StyledNavigation,
  StyledNavigationItem,
  StyledNavigationTitle,
};
