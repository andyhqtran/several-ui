import { rem } from 'polished';
import styled, { css } from 'styled-components';

const StyledNavigation = styled.div.attrs({
  role: 'navigation',
})`
  display: flex;

  ${(props) => props.direction === 'vertical' && css`
    flex-direction: column;
  `}
`;

const StyledNavigationItem = styled.div`
  font-size: ${rem(14)};
  cursor: pointer;

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
`;

const StyledNavigationTitle = styled.div`
  font-size: ${rem(16)};
  font-weight: 600;

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
