import { rgba } from 'polished';
import styled from 'styled-components';

import Navigation from '../Navigation';

const StyledFooter = styled.footer`
  background: #FFFFFF;
  box-shadow:
    inset 0 1px 0 #E8E6E5,
    0 -3px 0 ${rgba('#000000', 0.02)};
`;

const StyledFooterBottom = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 100%;
  max-width: 1176px;
  height: 72px;
  box-shadow: inset 0 1px 0 #E8E6E5;
  margin: 0 auto;
  padding: 0 48px;
`;

const StyledFooterColumn = styled.div`
  flex-basis: 25%;

  ${Navigation.Title} {
    margin-bottom: 12px;
  }
`;

const StyledFooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1176px;
  margin: 0 auto;
  padding: 96px 48px;
`;

const StyledFooterCopyright = styled.div`
  color: #5F5452;
  font-size: 14px;
`;

export {
  StyledFooter,
  StyledFooterBottom,
  StyledFooterColumn,
  StyledFooterContent,
  StyledFooterCopyright,
};
