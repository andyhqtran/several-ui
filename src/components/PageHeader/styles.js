import styled from 'styled-components';

import Breadcrumb from '../Breadcrumb';
import Heading from '../Heading';

const StyledPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  ${Breadcrumb.Element} {
    margin-bottom: 8px;
  }

  ${Heading.Element} {
    margin-bottom: 0;
  }
`;

export { StyledPageHeader };
