import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1176px;
  margin: 0 auto;
  padding-right: 48px;
  padding-left: 48px;
  box-sizing: border-box;
`;

const StyledLayoutHeader = styled.header`
  order: 1;
  width: 100%;
`;

const StyledLayoutMain = styled.main`
  order: 2;
  width: calc(100% - 252px);
`;

const StyledLayoutSidebar = styled.aside`
  order: 3;
  width: 252px;
`;

export {
  StyledLayout,
  StyledLayoutHeader,
  StyledLayoutMain,
  StyledLayoutSidebar,
};
