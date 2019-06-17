import { rem } from 'polished';
import styled from 'styled-components';

import Image from '../Image';

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  cursor: pointer;

  ${Image.Element} {
    margin-bottom: 4px;
    transition: box-shadow 0.2s ease;
  }

  &:hover {
    ${Image.Element} {
      box-shadow:
        inset 0 0 0 2px #DB3317,
        inset 0 0 0 4px #FFFFFF;
    }
  }
`;

const StyledPostAuthor = styled.div`
  color: #5F5452;
  font-size: ${rem(14)};
  line-height: ${rem(24)};
`;

const StyledPostDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledPostMeta = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPostTitle = styled.h4`
  margin: 0;
  color: #2F1814;
  font-size: ${rem(16)};
  font-weight: 500;
  line-height: ${rem(24)};
`;

export {
  StyledPost,
  StyledPostAuthor,
  StyledPostDetails,
  StyledPostMeta,
  StyledPostTitle,
};
