import { rem } from 'polished';
import styled, { css } from 'styled-components';

import Card from '../Card';

const sharedStyles = css`
  padding-right: 24px;
  padding-left: 24px;
  font-size: ${rem(14)};
  font-weight: 500;
`;

const StyledMenu = styled(Card)`
  display: flex;
  flex-direction: column;
  margin-bottom: -4px;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const StyledMenuFooter = styled.footer`
  background-color: #FBF9F8;
  border-radius: 0 0 4px 4px;
  box-shadow: inset 0 0 0 1px #E8E6E5;
  margin-bottom: -4px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #938E8C;

  ${sharedStyles}
`;

const StyledMenuHeader = styled.header`
  border-radius: 4px 4px 0 0;
  box-shadow: inset 0 -1px 0 #E8E6E5;
  padding-top: 8px;
  padding-bottom: 12px;

  ${sharedStyles}
`;

const StyledMenuItem = styled.a`
  display: block;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #5F5452;
  cursor: pointer;

  ${sharedStyles}

  &:hover {
    background-color: #FBF9F8;
    box-shadow:
      inset -1px 0 0 #E8E6E5,
      inset 1px 0 0 #E8E6E5;
    color: #2F1814;
  }
`;

export {
  StyledMenu,
  StyledMenuFooter,
  StyledMenuHeader,
  StyledMenuItem,
};
