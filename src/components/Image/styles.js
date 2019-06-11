import styled from 'styled-components';

import Card from '../Card';
import Icon from '../Icon';

const StyledImage = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FBF9F8;
  padding: 4px;
  box-shadow:
    inset 0 0 0 1px #E8E6E5,
    inset 0 0 0 4px #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;

  ${Icon.Element} {
    color: #938E8C;
  }
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
