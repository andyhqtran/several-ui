import styled from 'styled-components';

import FeaturedPost from '../FeaturedPost';
import Grid from '../Grid';

const StyledShowcaseGrid = styled(Grid)`
  ${FeaturedPost.Element} {
    align-self: start;
    grid-column-start: span 2;
    grid-row-start: span 2;
  }
`;

export { StyledShowcaseGrid };
