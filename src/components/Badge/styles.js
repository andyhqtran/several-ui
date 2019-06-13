import { rem } from 'polished';
import styled from 'styled-components';

const StyledBadge = styled.div`
  display: inline-flex;
  background: #FBF9F8;
  height: 30px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px #E8E6E5;
  padding: 0 8px;
  font-size: ${rem(14)};
  font-weight: 500;
  line-height: 30px;
`;

export { StyledBadge };
