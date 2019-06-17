import { rem } from 'polished';
import styled from 'styled-components';

const StyledList = styled.div.attrs({
  role: 'list',
})`
  display: flex;
  flex-direction: column;
`;

const StyledListItem = styled.div.attrs({
  role: 'listitem',
})`
  margin-bottom: 12px;
  font-size: ${rem(14)};
`;

const StyledListTitle = styled.div`
  margin-bottom: 12px;
  font-size: ${rem(16)};
  font-weight: 500;
`;

export {
  StyledList,
  StyledListItem,
  StyledListTitle,
};
