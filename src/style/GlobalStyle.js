import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body{
    background-color: rgba(255, 219, 184, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

`;

export default GlobalStyle;