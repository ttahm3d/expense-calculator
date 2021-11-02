import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: hsl(0,0%,100%);
    color: hsl(0, 0%, 20%);
    font-family: 'Raleway', sans-serif;
  }

  h1, h2, h3, h4 {
    margin:0;
  }

  p {
    margin:0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button, select, option {
    font-family: inherit;
  }

`;
