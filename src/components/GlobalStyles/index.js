import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 24px;
  }

  ::selection {
    background-color: #DB3317;
    color: #FFFFFF;
  }
`;

export default GlobalStyles;
