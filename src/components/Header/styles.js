import { rgba } from 'polished';
import styled from 'styled-components';

import Logo from '../Logo';
import Navigation from '../Navigation';

const StyledHeader = styled.header`
  position: sticky;
  background: #FFFFFF;
  margin-bottom: 64px;
  box-shadow:
    inset 0 -1px 0 #E8E6E5,
    0 3px 0 ${rgba('#000000', 0.02)};

  ${Logo.Element} {
    margin-right: 48px;
  }

  ${Navigation.Element} {
    flex-grow: 1;
  }
`;

const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1176px;
  height: 72px;
  margin: 0 auto;
  padding: 0 48px;
  box-sizing: border-box;
`;

export {
  StyledHeader,
  StyledHeaderContent,
};
