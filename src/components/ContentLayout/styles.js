import styled from 'styled-components';

const SIDEBAR_WIDTH = 252;

const GUTTER = 48;

const StyledContentLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1176px;
  margin: 0 auto 96px;
  padding-right: 48px;
  padding-left: 48px;
  box-sizing: border-box;
`;

const StyledContentLayoutHeader = styled.header`
  width: 100%;
`;

const StyledContentLayoutMain = styled.main`
  width: ${(props) => props.isFluid ? '100%' : `calc(100% - ${SIDEBAR_WIDTH} - ${GUTTER}px)`};
  margin-right: ${GUTTER}px;
`;

const StyledContentLayoutSidebar = styled.aside`
  width: ${SIDEBAR_WIDTH}px;
`;

export {
  StyledContentLayout,
  StyledContentLayoutHeader,
  StyledContentLayoutMain,
  StyledContentLayoutSidebar,
};
