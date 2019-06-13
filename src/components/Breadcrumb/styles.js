import { rem } from 'polished';
import styled from 'styled-components';

import Icon from '../Icon';

const StyledBreadcrumb = styled.div`
  display: flex;
  align-items: center;
`;

const StyledBreadcrumbDivider = styled(Icon).attrs({
  name: 'chevron-right',
  size: 14,
})`
  stroke-width: 3px;
  margin: 0 8px;
  color: #938E8C;
`;

const StyledBreadcrumbItem = styled.div`
  color: ${props => props.selected ? '#DB3317' : '#5F5452'};
  font-size: ${rem(14)};
  font-weight: 500;
`;

export {
  StyledBreadcrumb,
  StyledBreadcrumbDivider,
  StyledBreadcrumbItem,
};
