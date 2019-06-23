import { rem, rgba } from 'polished';
import styled from 'styled-components';

import Avatar from '../Avatar';
import Bold from '../Bold';
import Card from '../Card';
import Heading from '../Heading';

const StyledUser = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  ${Avatar.Element} {
    background: #FFFFFF;
    width: 80px;
    height: 80px;
    margin-bottom: -28px;
    box-shadow:
      inset 0 0 0 1px #E8E6E5,
      0 2px 0 ${rgba('#000000', 0.02)};
    transform: translateY(-40px);
  }

  ${Heading.Element} {
    margin-bottom: 8px;
    font-size: ${rem(16)};
    line-height: ${rem(24)};
  }
`;

const StyledUserFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background: #FBF9F8;
  width: 100%;
  box-shadow: inset 0 0 0 1px #E8E6E5;
  margin-top: 24px;
  padding: 12px 24px;
  box-sizing: border-box;
`;

const StyledUserMeta = styled.div`
  display: flex;
  flex-direction: column;
  color: #938E8C;
  font-size: ${rem(14)};

  ${Bold.Element} {
    font-size: ${rem(16)};
  }
`;

export {
  StyledUser,
  StyledUserFooter,
  StyledUserMeta,
};
