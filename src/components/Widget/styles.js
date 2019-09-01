import { rem } from 'polished';
import styled from 'styled-components';

import Card from '../Card';

const StyledWidget = styled(Card)`
  background: #FBF9F8;
  padding: 24px;
  color: #5F5452;
  font-size: ${rem(14)};
`;

const StyledWidgetTitle = styled.h4`
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 4px;
  color: #2F1814;
  font-size: ${rem(16)};
  font-weight: 500;
`;

export {
  StyledWidget,
  StyledWidgetTitle,
};
