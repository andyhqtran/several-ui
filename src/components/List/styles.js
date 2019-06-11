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
  font-size: 14px;
`;

const StyledListTitle = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
`;

export {
  StyledList,
  StyledListItem,
  StyledListTitle,
};
