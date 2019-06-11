import styled from 'styled-components';

import Card from '../Card';

const StyledWidget = styled(Card)`
  background: #FBF9F8;
  padding: 24px;
  color: #5F5452;
  font-size: 14px;
`;

const StyledWidgetTitle = styled.h4`
  margin: 0;
  margin-bottom: 4px;
  color: #2F1814;
  font-size: 16px;
  font-weight: 500;
`;

export {
  StyledWidget,
  StyledWidgetTitle,
};
