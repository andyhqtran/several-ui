import { rem } from 'polished';
import styled from 'styled-components';

import Image from '../Image';

const StyledFeaturedPost = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  ${Image.Element} {
    margin-bottom: 12px;
  }
`;

const StyledFeaturedPostAuthor = styled.div`
  color: #5F5452;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
`;

const StyledFeaturedPostDetails = styled.div`
  position: absolute;
  right: 24px;
  bottom: 64px;
  left: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  border-radius: 4px;
  padding: 24px;
`;

const StyledFeaturedPostMeta = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFeaturedPostTitle = styled.h4`
  margin: 0;
  color: #2F1814;
  font-size: ${rem(24)};
  font-weight: 500;
  line-height: ${rem(28)};
`;

export {
  StyledFeaturedPost,
  StyledFeaturedPostAuthor,
  StyledFeaturedPostDetails,
  StyledFeaturedPostMeta,
  StyledFeaturedPostTitle,
};
