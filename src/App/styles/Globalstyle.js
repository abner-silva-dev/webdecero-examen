import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root {
    --primary-color: #1f2226;
    --secondary-color: #EA4D88;
  }

  * { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }  

  html{
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-family: 'Quicksand', Roboto, sans-serif;
    transition: color 0.3s, background-color 0.3s;
    line-height: 1.5;
    font-size: 1.6rem; 
    background-color: var(--primary-color);
  }

  code {
    font-family: 'Quicksand', source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`;

export default GlobalStyles;
