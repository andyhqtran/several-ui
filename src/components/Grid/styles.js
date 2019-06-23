import styled from 'styled-components';

const StyledGrid = styled.div`
  display: ${(props) => props.variant === 'inline-grid' ? 'inline-grid' : 'grid'};
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-gap: ${(props) => props.gap}px;
`;

export { StyledGrid };
