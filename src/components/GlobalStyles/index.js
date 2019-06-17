import { rem } from 'polished';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #FEFDFC;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', Helvetica, Arial, sans-serif;
    font-size: ${rem(16)};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 24px;
    margin: 0;
  }

  ::selection {
    background-color: #DB3317;
    color: #FFFFFF;
  }
`;

export default GlobalStyles;
