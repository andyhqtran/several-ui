import { rem } from 'polished';
import styled from 'styled-components';

const StyledSidebarNavigation = styled.nav`
  display: flex;
  flex-direction: column;
`;

const StyledSidebarNavigationItem = styled.a`
  background-color: ${(props) => props.isActive ? '#DB3317' : 'transparent'};
  border-radius: 4px;
  padding: 8px 12px;
  color: ${(props) => props.isActive ? '#FFFFFF' : '#5F5452'};
  line-height: ${rem(24)};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.isActive ? '#FFFFFF' : '#DB3317'};
  }
`;

export {
  StyledSidebarNavigation,
  StyledSidebarNavigationItem,
};
