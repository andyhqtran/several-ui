import styled from 'styled-components';

import Card from '../Card';

const StyledImage = styled(Card)`
  background: #FBF9F8;
  padding: 4px;
  box-shadow:
    inset 0 0 0 1px #E8E6E5,
    inset 0 0 0 4px #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
`;

const StyledImageEntity = styled.img`
  display: block;
  width: 100%;
  pointer-events: none;
  user-select: none;
`;

export {
  StyledImage,
  StyledImageEntity,
};
