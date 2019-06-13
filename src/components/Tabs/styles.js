import { rem } from 'polished';
import styled, { css } from 'styled-components';

const StyledTabs = styled.div`
  display: flex;
  box-shadow: inset 0 -1px 0 #E8E6E5;
`;

const StyledTabsItem = styled.div`
  margin-right: 48px;
  color: #5F5452;
  font-size: ${rem(16)};
  line-height: ${rem(48)};
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  ${props => props.selected && css`
    box-shadow: inset 0 -2px 0 #000;
    color: #2F1814;
    font-weight: 500;
  `}
`;

export {
  StyledTabs,
  StyledTabsItem,
};
