import styled from 'styled-components';

const StyledLogo = styled.svg.attrs({
  viewBox: '0 0 30 30',
})`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

export { StyledLogo };
