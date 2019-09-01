import styled from 'styled-components';

import Image from '../Image';
import Paragraph from '../Paragraph';
import Widget from '../Widget';

const StyledAffiliateWidget = styled(Widget)`
  background: #FFFFFF;

  ${Widget.Title} {
    margin-bottom: 24px;
  }

  a {
    text-decoration: none;
  }

  ${Image.Element} {
    margin-bottom: 12px;
  }

  ${Paragraph.Element} {
    text-align: center;
  }
`;

export { StyledAffiliateWidget };
